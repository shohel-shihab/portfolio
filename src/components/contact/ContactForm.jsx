"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl border border-white/10 bg-[#1b1527] px-5 py-4 outline-none focus:border-violet-500"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl border border-white/10 bg-[#1b1527] px-5 py-4 outline-none focus:border-violet-500"
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-xl border border-white/10 bg-[#1b1527] px-5 py-4 outline-none focus:border-violet-500"
      />

      <textarea
        rows="6"
        placeholder="Write your message..."
        className="w-full rounded-xl border border-white/10 bg-[#1b1527] px-5 py-4 outline-none focus:border-violet-500"
      ></textarea>

      <button
        className="rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105"
      >
        Send Message
      </button>
    </motion.form>
  );
}