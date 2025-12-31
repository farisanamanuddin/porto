import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "PT Contoh Teknologi",
    period: "Jan 2024 – Jun 2024",
    desc: "Mengembangkan aplikasi web menggunakan React dan REST API serta berkolaborasi dengan tim backend.",
  },
  {
    role: "Freelance Web Developer",
    company: "Remote",
    period: "2023 – Sekarang",
    desc: "Membangun website portofolio, company profile, dan dashboard admin.",
  },
];

export default function Experience() {
  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h3>{item.role}</h3>
            <span>{item.company} • {item.period}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
