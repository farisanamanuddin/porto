import { motion } from "framer-motion";

const education = [
  {
    school: "Universitas Muhammadiyah Sukabumi",
    major: "Teknik Informatika",
    period: "2021 – 2025",
    desc: "Fokus pada Artificial Intelligence, Machine Learning, dan Web Development.",
  },
];

export default function Education() {
  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h3>{item.school}</h3>
            <span>{item.major} • {item.period}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
