import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Feedback from "./models/Feedback.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

async function connectToDatabase() {
  if (isDbConnected()) return true;

  if (!MONGODB_URI || MONGODB_URI.includes("<db_password>")) {
    console.warn("⚠️ [MongoDB Warning] Please set your actual database password in .env to connect to MongoDB Atlas.");
    return false;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ [MongoDB Connected] Successfully connected to MongoDB Atlas!");
    return true;
  } catch (error) {
    console.error("❌ [MongoDB Error] Failed to connect to MongoDB Atlas:", error.message);
    return false;
  }
}

// Connect at startup
connectToDatabase();

// Health check endpoint
app.get("/api/health", async (req, res) => {
  res.json({
    status: "online",
    database: isDbConnected() ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
});

// Endpoint: Save contact form submission / feedback
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required fields."
      });
    }

    // Try to ensure database connection
    await connectToDatabase();

    if (!isDbConnected()) {
      // Return simulated success with notice if password hasn't been set yet
      return res.status(200).json({
        success: true,
        savedToCloud: false,
        message: "Message received! (Set your MongoDB password in .env for cloud persistence)",
        data: { name, email, subject, message, createdAt: new Date() }
      });
    }

    const newFeedback = new Feedback({
      name,
      email,
      subject: subject || "Portfolio Feedback",
      message,
      ipAddress: req.ip || req.headers["x-forwarded-for"] || "",
      userAgent: req.headers["user-agent"] || ""
    });

    const savedDoc = await newFeedback.save();

    console.log(`📩 New message saved from ${name} (${email}) [ID: ${savedDoc._id}]`);

    return res.status(201).json({
      success: true,
      savedToCloud: true,
      message: "Your message has been saved to the MongoDB database successfully!",
      id: savedDoc._id
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error while saving message to database."
    });
  }
});

// Endpoint: Retrieve all collected feedback / messages
app.get("/api/messages", async (req, res) => {
  try {
    await connectToDatabase();
    if (!isDbConnected()) {
      return res.status(503).json({ success: false, error: "Database not connected" });
    }

    const messages = await Feedback.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 [Server Running] Backend API listening on http://localhost:${PORT}`);
});
