import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Landing = () => {
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    "“Finally, a design that doesn’t yell at me. Love the silence in the layout.”",
    "“Black and white done right. This page feels like art.”",
    "“Simplicity like this is surprisingly rare.”",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const features = [
    {
      title: "Elegant Simplicity",
      desc: "Nothing extra—just what you need.",
    },
    {
      title: "Clean Layout",
      desc: "Whitespace-focused design that breathes.",
    },
    {
      title: "Full Focus",
      desc: "Your message, with zero distraction.",
    },
  ];

  const getButtonClass = (isDark = false) => `
    px-6 py-3 rounded-2xl transition duration-300 text-sm font-semibold
    ${isDark
      ? "bg-black text-white shadow-[inset_4px_4px_8px_#111,inset_-4px_-4px_8px_#222] hover:shadow-[4px_4px_12px_#000,-4px_-4px_12px_#333] hover:bg-gray-900"
      : "bg-white text-black shadow-[inset_4px_4px_8px_#ddd,inset_-4px_-4px_8px_#fff] hover:shadow-[4px_4px_12px_#ccc,-4px_-4px_12px_#fff] hover:bg-gray-100"}
  `;

  return (
    <div>
      <Navbar/>
      <Sidebar></Sidebar>
    </div>
  );
}
