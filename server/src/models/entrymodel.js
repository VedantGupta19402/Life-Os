const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    date: {
        type: String,
        required: true
    },

    sleep: {
        type: Number,
        required: true
    },

    mood: {
        type: Number,
        required: true
    },

    energy: {
        type: Number,
        required: true
    },

    focus: {
        type: Number,
        required: true
    },

    exercise: {
        type: Number,
        required: true
    },

    studyHours: {
        type: Number,
        required: true
    },

    screenTime: {
        type: Number,
        required: true
    }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;