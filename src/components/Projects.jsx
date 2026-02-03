import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS, showcasing selected projects, experience, and contact information.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/porto.png",
    github: "https://github.com/farisanam/my_portfolio",
    live: "https://farisanam.co.id",
  },
  {
    id: 2,
    title: "Classification Cat Breeds with VGG16",
    description: "A web application that classifies different breeds of cats using the VGG16 Convolutional Neural Network architecture, built with Python and Flask.",
    tech: ["Python", "Flask", "TensorFlow", "Keras", "CNN"],
    image: "/flask.png",
    github: "https://github.com/farisanam/",
    live: "",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
}
