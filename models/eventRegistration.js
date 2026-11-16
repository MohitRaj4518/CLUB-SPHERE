const mongoose = require("mongoose");

const eventRegistrationSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
        trim: true
    },
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    club: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    rollNumber: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// A student can register once for each event, but can join multiple events.
eventRegistrationSchema.index(
    { eventId: 1, rollNumber: 1 },
    { unique: true }
);

module.exports = mongoose.model(
    "EventRegistration",
    eventRegistrationSchema,
    "eventRegistrations"
);
