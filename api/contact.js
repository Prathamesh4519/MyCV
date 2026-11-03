import mongoose from "mongoose";
import Feedback from "../server/models/Feedback.js";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "Missing required fields." });
      }

      await connectDB();

      const newFeedback = new Feedback({
        name,
        email,
        subject: subject || "Portfolio Feedback",
        message,
        ipAddress: req.headers["x-forwarded-for"] || "",
        userAgent: req.headers["user-agent"] || ""
      });

      const saved = await newFeedback.save();

      return res.status(201).json({
        success: true,
        message: "Message saved to MongoDB!",
        id: saved._id
      });
    } catch (error) {
      console.error("MongoDB Serverless Error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
