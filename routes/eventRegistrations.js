const express = require("express");
const router = express.Router();
const EventRegistration = require("../models/eventRegistration");
const config = require("../config");

// Event IDs are fixed in the website so registrations cannot be sent to random events.
const allowedEvents = {
    "techknow-coding": { name: "Coding Competition", club: "Techknow" },
    "techknow-hackathon": { name: "Mini Hackathon", club: "Techknow" },
    "techknow-webworkshop": { name: "Web Development Workshop", club: "Techknow" },
    "sports-football": { name: "Football Tournament", club: "Sports" },
    "sports-cricket": { name: "Cricket Match", club: "Sports" },
    "sports-badminton": { name: "Badminton Competition", club: "Sports" },
    "clutch-gaming": { name: "Gaming Competition", club: "Clutch" },
    "clutch-fifa": { name: "Football Game Challenge", club: "Clutch" },
    "clutch-chess": { name: "Online Chess Challenge", club: "Clutch" },
    "cacs-cultural": { name: "Cultural Evening", club: "CACS" },
    "cacs-dance": { name: "Dance Auditions", club: "CACS" },
    "cacs-singing": { name: "Singing Competition", club: "CACS" },
    "neon-film": { name: "Short Film Competition", club: "NEON" },
    "neon-photography": { name: "Photography Walk", club: "NEON" },
    "neon-editing": { name: "Video Editing Workshop", club: "NEON" }
};

// Register a student for one specific event.
router.post("/:eventId", async (req, res) => {
    try {
        const event = allowedEvents[req.params.eventId];

        if (!event) {
            return res.status(400).json({ message: "Unknown event." });
        }

        const name = String(req.body.name || "").trim();
        const rollNumber = String(req.body.rollNumber || "").trim().toUpperCase();
        const branch = String(req.body.branch || "").trim();
        const year = String(req.body.year || "").trim();
        const email = String(req.body.email || "").trim().toLowerCase();

        if (!name || !rollNumber || !branch || !year || !email) {
            return res.status(400).json({ message: "Please fill in all fields." });
        }

        const allowedBranches = ["CSE", "ECE", "AI & DS"];
        if (!allowedBranches.includes(branch)) {
            return res.status(400).json({ message: "Please select a valid branch." });
        }

        const allowedYears = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
        if (!allowedYears.includes(year)) {
            return res.status(400).json({ message: "Please select a valid academic year." });
        }

        const collegeEmailPattern = /^[a-z0-9._%+-]+@iiitkota\.ac\.in$/;
        if (!collegeEmailPattern.test(email)) {
            return res.status(400).json({
                message: "Please enter your official IIIT Kota email ending with @iiitkota.ac.in (for example: 2025kuad3011@iiitkota.ac.in)."
            });
        }

        const student = await EventRegistration.create({
            eventId: req.params.eventId,
            eventName: event.name,
            club: event.club,
            name,
            rollNumber,
            branch,
            year,
            email
        });

        res.status(201).json({
            message: `You have successfully registered for ${event.name}!`,
            student: {
                name: student.name,
                rollNumber: student.rollNumber,
                event: event.name
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "This roll number is already registered for this event."
            });
        }

        if (error.name === "ValidationError") {
            const firstMsg = Object.values(error.errors || {})[0]?.message || "Validation error.";
            return res.status(400).json({ message: firstMsg });
        }

        console.error("Event registration error:", error);
        res.status(500).json({ message: "Could not save event registration." });
    }
});

// Withdraw a student's registration from one specific event.
router.delete("/:eventId", async (req, res) => {
    try {
        const event = allowedEvents[req.params.eventId];
        if (!event) {
            return res.status(400).json({ message: "Unknown event." });
        }

        const rollNumber = String(req.body.rollNumber || "").trim().toUpperCase();
        const email = String(req.body.email || "").trim().toLowerCase();

        if (!rollNumber || !email) {
            return res.status(400).json({
                message: "Enter the roll number and college email used during registration."
            });
        }

        const collegeEmailPattern = /^[a-z0-9._%+-]+@iiitkota\.ac\.in$/;
        if (!collegeEmailPattern.test(email)) {
            return res.status(400).json({
                message: "Please use your official IIIT Kota email ending with @iiitkota.ac.in."
            });
        }

        const deletedRegistration = await EventRegistration.findOneAndDelete({
            eventId: req.params.eventId,
            rollNumber,
            email
        });

        if (!deletedRegistration) {
            return res.status(404).json({
                message: "No registration found for this event with those details."
            });
        }

        res.json({
            message: `Your registration for ${event.name} has been withdrawn successfully.`
        });
    } catch (error) {
        console.error("Event withdrawal error:", error);
        res.status(500).json({ message: "Could not withdraw event registration." });
    }
});

// View attendees for one event. Requires the coordinator key.
router.get("/:eventId", async (req, res) => {
    try {
        const providedKey = (req.get("x-admin-key") || "").trim();
        const configuredKey = String(config.ADMIN_KEY || "").trim();

        if (!providedKey || providedKey !== configuredKey) {
            return res.status(401).json({
                message: "Coordinator access required. Enter the admin key."
            });
        }

        const event = allowedEvents[req.params.eventId];

        if (!event) {
            return res.status(400).json({ message: "Unknown event." });
        }

        const students = await EventRegistration.find({
            eventId: req.params.eventId
        })
            .select("name rollNumber branch year email createdAt")
            .sort({ createdAt: -1 })
            .lean();

        res.json({
            event: event.name,
            club: event.club,
            count: students.length,
            students
        });
    } catch (error) {
        console.error("Event attendee list error:", error);
        res.status(500).json({ message: "Could not load event registrations." });
    }
});

module.exports = router;
