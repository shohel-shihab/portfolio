"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

const contacts = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "shihabcse21@gmail.com",
    link: "mailto:shihabcse21@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+880 1723517651",
    link: "tel:+8801723517651",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    value: "+880 1723517651",
    link: "https://wa.me/8801XXXXXXXXX",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    value: "Dhaka, Bangladesh",
    link: "#",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contacts.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target={item.title === "Location" ? "_self" : "_blank"}
          rel="noreferrer"
          whileHover={{ x: 10 }}
          className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
            {item.icon}
          </div>

          <div>
            <p className="text-sm text-gray-400">
              {item.title}
            </p>

            <h3 className="font-semibold">
              {item.value}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}