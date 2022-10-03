import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
});

export default RoomSchema;