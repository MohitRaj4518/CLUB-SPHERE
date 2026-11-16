const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config");
const eventRegistrationRoutes = require("./routes/eventRegistrations");

const app = express();

// Middleware: read JSON request bodies and serve frontend files.
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API routes.
app.use("/api/events", eventRegistrationRoutes);

app.get("/api/health", (req, res) => {
    res.json({ message: "ClubSphere server is running." });
});

// Send a helpful message for unknown API routes.
app.use("/api", (req, res) => {
    res.status(404).json({ message: "API route not found." });
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({ message: "Invalid JSON in request body." });
    }
    console.error("Server error:", err);
    res.status(500).json({ message: "Internal server error." });
});

async function startServer() {
    try {
        await mongoose.connect(config.MONGODB_URI);
        console.log("Connected to MongoDB.");

        app.listen(config.PORT, () => {
            console.log(`ClubSphere is running at http://localhost:${config.PORT}`);
        });
    } catch (error) {
        console.error("Could not start the server:", error.message);
        process.exit(1);
    }
}

startServer();
