import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ y: -8 }}
            onClick={() => setSelected(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
