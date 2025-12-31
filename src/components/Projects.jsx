import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cat Breed Classification",
    short: "CNN-based image classification using VGG16",
    description:
      "A deep learning project to classify cat breeds (Persian, Himalayan, Domestic) using Transfer Learning with VGG16. Includes data augmentation and evaluation metrics.",
    tech: ["Python", "TensorFlow", "CNN", "VGG16"],
    github: "https://github.com/yourusername/cat-breed-classification",
    demo: "",
  },
  {
    id: 2,
    title: "IoT Monitoring System",
    short: "ESP32 + Web Dashboard",
    description:
      "IoT-based monitoring system using ESP32 integrated with a web dashboard to display real-time sensor data.",
    tech: ["ESP32", "IoT", "React", "REST API"],
    github: "https://github.com/yourusername/iot-dashboard",
    demo: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    short: "Modern React portfolio with dark mode",
    description:
      "Personal portfolio website built with React, Tailwind CSS, Framer Motion, and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio-react",
    demo: "",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {project.short}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-2xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  {selected.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
