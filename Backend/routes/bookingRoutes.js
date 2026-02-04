import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// GET ALL BOOKINGS (ADMIN)
router.get("/admin/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

