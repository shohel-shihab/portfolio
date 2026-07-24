"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error(data.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full rounded-xl bg-[#1b1527] p-4"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full rounded-xl bg-[#1b1527] p-4"
      />

      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full rounded-xl bg-[#1b1527] p-4"
      />

      <textarea
        rows={6}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message..."
        className="w-full rounded-xl bg-[#1b1527] p-4"
      />

      <button
        disabled={loading}
        className="rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 font-semibold"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}