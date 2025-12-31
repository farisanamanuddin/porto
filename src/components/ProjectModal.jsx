import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <button className="close-btn" onClick={onClose}>
          <X />
        </button>

        <h2>{project.title}</h2>
        <p>{project.desc}</p>

        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="modal-actions">
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.demo} target="_blank">Live Demo</a>
        </div>
      </motion.div>
    </motion.div>
  );
}
