import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="bg-white text-center py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        We are passionate about delivering eco-friendly agricultural solutions to empower farmers and promote sustainability. 
        Our team works closely with local producers to ensure top-quality organic products.
      </p>
    </motion.div>
  );
}
