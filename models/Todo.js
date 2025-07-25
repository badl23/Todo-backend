const mongoose = require('mongoose');

// schema define
const TodoSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Todo", TodoSchema);