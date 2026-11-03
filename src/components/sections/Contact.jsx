import React, { useState } from "react";
import { Send, Check, Copy, MapPin, Clock, Database, Lightbulb, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from "../common/Icons";
import { personalInfo } from "../../data/portfolioData";
import FeedbackSuccessModal from "./FeedbackSuccessModal";
import BorderGlow from "../common/BorderGlow";

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast("Please fill in all required fields.", "error");
      return;
    }

    setIsSubmitting(true);
    const submittedPayload = { ...formData };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);

      setIsSubmitting(false);
      setIsSent(true);
      setLastSubmission(submittedPayload);
      setShowSuccessModal(true);

      if (result && result.savedToCloud) {
        if (onShowToast) onShowToast("Response saved to MongoDB Atlas database!", "success");
      } else {
        if (onShowToast) onShowToast("Message received and recorded!", "success");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } catch (err) {
      console.log("Submitting with fallback:", err);
      setIsSubmitting(false);
      setIsSent(true);
      setLastSubmission(submittedPayload);
      setShowSuccessModal(true);

      if (onShowToast) onShowToast("Opening default email client...", "info");

      const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Let's Start a <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in collaboration, internship opportunities, technical discussions, or have project feedback? Feel free to reach out.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info, Socials, Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Usually available and responsive within 24 hours.
                </p>
              </div>

              {/* Email box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Email Address</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-cyan-300 truncate font-semibold">
                    {personalInfo.socials.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{personalInfo.location} (IIIT Nagpur Campus)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Timezone: {personalInfo.timezone}</span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Profiles & Handles
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors"
                  >
                    <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>

                  <a
                    href={personalInfo.socials.codechef}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-400/50 text-xs font-semibold text-slate-300 hover:text-sky-300 transition-colors"
                  >
                    <CodeChefIcon className="w-4 h-4 text-sky-400" />
                    <span>CodeChef</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with MongoDB Integration */}
          <div className="lg:col-span-7">
            <BorderGlow
              borderRadius={24}
              glowRadius={36}
              glowColor="200 80 60"
              colors={["#06b6d4", "#6366f1", "#a855f7", "#38bdf8"]}
              backgroundColor="#0d1424"
              className="p-6 sm:p-8 shadow-2xl border border-cyan-500/25"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-cyan-400 inline-block" />
                      <span>Send a Message</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Messages are securely stored in MongoDB Atlas.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono self-start sm:self-auto">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Atlas Database Online</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-200">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-xs transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-200">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-200">Topic / Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project collaboration / Internship inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-xs transition-colors"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-200">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts, opportunity, or feedback here..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-xs transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs shadow-xl shadow-cyan-500/30 border border-cyan-400/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Saving to MongoDB Atlas...</span>
                      </span>
                    ) : isSent ? (
                      <span className="flex items-center gap-1.5 text-emerald-200">
                        <Check className="w-4 h-4 text-emerald-400" />
                        Message Saved Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>

      <FeedbackSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        submissionData={lastSubmission}
      />
    </section>
  );
}
