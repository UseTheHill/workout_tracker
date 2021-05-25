const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: () => new Date() },
        exercises: [
            {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        },
        ],
    });
