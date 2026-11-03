import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address"
      ]
    },
    subject: {
      type: String,
      trim: true,
      default: "Portfolio Inquiry"
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true
    },
    status: {
      type: String,
      enum: ["unread", "read", "responded"],
      default: "unread"
    },
    ipAddress: {
      type: String,
      default: ""
    },
    userAgent: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
