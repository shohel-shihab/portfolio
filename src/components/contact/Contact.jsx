"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#11071F]"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have a project in mind or want to discuss an opportunity?
            Feel free to contact me. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}