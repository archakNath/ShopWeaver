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
    "“Planning for a website for your needs?????”",
    "“Then You are on the right place....”",
    "“Introducing Shopweaver where you can met your needs...”",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const features = [
    {
      title: "Develop",
      desc: "Develop your desired website.",
    },
    {
      title: "Templates",
      desc: "Choose your theme from various available templates",
    },
    {
      title: "Hastle free",
      desc: "Build your website, with zero hastle.",
    },
  ];

  const getButtonClass = (isDark = false) => `
    px-6 py-3 rounded-2xl transition duration-300 text-sm font-semibold
    ${isDark
      ? "bg-black text-white shadow-[inset_4px_4px_8px_#111,inset_-4px_-4px_8px_#222] hover:shadow-[4px_4px_12px_#000,-4px_-4px_12px_#333] hover:bg-gray-900"
      : "bg-white text-black shadow-[inset_4px_4px_8px_#ddd,inset_-4px_-4px_8px_#fff] hover:shadow-[4px_4px_12px_#ccc,-4px_-4px_12px_#fff] hover:bg-gray-100"}
  `;

  return (
    <div className="bg-white text-black font-sans">
      {/* Header Section */}
      <motion.header
        className="relative py-24 px-6 bg-white flex flex-col items-center text-center z-10"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        <div className="absolute top-6 left-6">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-bold text-black text-sm">
            LOGO
          </div>
        </div>

        <div className="absolute top-6 right-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={getButtonClass(false)}
          >
            Login
          </motion.button>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 relative inline-block">
            <span className="relative z-10">SHOPWEAVER</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-black opacity-10 rounded-lg z-0"></span>
          </h1>
          <p className="text-xl max-w-2xl text-gray-700 mb-8 mx-auto">
            Dive into a world of creating your own website.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={getButtonClass(false)}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Features Section */}
      <section className="py-28 px-6 bg-white z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Features
          </motion.h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => {
              const isSelected = selectedFeature === index;

              return (
                <motion.div
                  key={index}
                  className={`
                    cursor-pointer rounded-2xl p-6 border transition duration-300
                    ${isSelected ? "bg-black text-white shadow-xl border-black" : "bg-white text-black border-gray-300"}
                    hover:shadow-[4px_4px_12px_#ccc,-4px_-4px_12px_#fff] hover:bg-gray-100
                  `}
                  onClick={() =>
                    setSelectedFeature(isSelected ? null : index)
                  }
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <motion.section
        className="bg-gray-50 py-24 px-6 relative z-10 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">What exactly is SHOPWEAVER???</h2>
          <div className="relative h-24 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="italic text-gray-700 absolute left-0 right-0"
              >
                — {testimonials[testimonialIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-3 h-3 rounded-full transition ${testimonialIndex === i ? "bg-black" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
      <motion.section
        className="py-28 px-6 bg-white text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {["Archak Nath", "Srijit Pal", "Sanjib Sen", "Sarthak Chakraborty"].map((name, i) => (
            <motion.div
              key={name}
              className="bg-gray-50 rounded-xl shadow p-6 hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600 text-sm">Developer</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="py-24 px-6 bg-black text-white text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6 text-gray-300">Subscribe to our newsletter for updates and insights.</p>
        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-2xl w-full sm:w-auto text-black shadow-inner outline-none"
          />
          <button type="submit" className={getButtonClass(true)}>
            Subscribe
          </button>
        </form>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-32 px-6 bg-white text-center relative z-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Keep It Simple</h2>
        <p className="text-lg mb-6 text-gray-600 max-w-xl mx-auto">
          Sign up and embrace the thrill of creating your own website.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={getButtonClass(false)}
        >
          Join Now
        </motion.button>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-gray-500 bg-white">
        <p>© 2025 SHOPWEAVER Inc. All rights reserved by developers.</p>
      </footer>
    </div>
  );
}
