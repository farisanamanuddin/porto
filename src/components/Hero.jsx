import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Muhammad Farisan Amanuddin
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Web & AI Developer
      </motion.p>
    </section>
  );
}
