import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import bookingRoutes from "./routes/bookingRoutes.js";

// Load env variables
dotenv.config();

const app = express();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/bookings", bookingRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Serve frontend (production)
app.use(express.static(path.join(__dirname,"..", "Frontend", "build")));
// Serve frontend static files
app.use(express.static(path.join(__dirname,"..", "Frontend", "build")));

// SPA fallback (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(
    path.resolve(__dirname,"..", "Frontend", "build", "index.html")
  );
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
