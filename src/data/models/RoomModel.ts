import mongoose from "mongoose";
import GuestSchema from "../schema/GuestSchema";

const RoomModel = mongoose.model('Guest', GuestSchema);

export default RoomModel;