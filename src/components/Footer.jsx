import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="footer"
    >
      © {new Date().getFullYear()} Farisan
    </motion.footer>
  );
}
