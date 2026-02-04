import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    date: String,
    service: String
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
