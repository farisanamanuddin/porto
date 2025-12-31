import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-10 py-16 bg-white dark:bg-gray-900 transition">
  <h2 className="text-2xl font-bold mb-4">About Me</h2>
  <p className="text-gray-700 dark:text-gray-300">
    I am a Computer Science student with strong interest in Artificial
    Intelligence, Machine Learning, and Deep Learning, especially image
    classification using transfer learning.
  </p>
    </motion.section>
  )
}
