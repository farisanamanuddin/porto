import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react"; // Tambahkan import ikon

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Klik di luar modal untuk menutup
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-xl p-6 relative"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat konten diklik
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white"
        >
          <X />
        </button>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto rounded-lg mb-4 object-cover" 
        />

        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {project.description}
        </p>

        {/* Tambahkan ini di ProjectModal di bawah Judul */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* --- Bagian Tombol Link --- */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
            >
              <Github size={18} />
              GitHub 
            </a>
          )}

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
