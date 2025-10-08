import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="bg-green-50 text-center py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-2">Email: contact@agriproduct.com</p>
      <p className="text-lg text-gray-700 mb-2">Phone: +91 98765 43210</p>
      <p className="text-lg text-gray-700">Address: Indore, Madhya Pradesh, India</p>
    </motion.div>
  );
}
