export default function Skills() {
  const skills = ["Python", "TensorFlow", "Flask", "React", "MySQL", "Git"]
  return (
    <section className="px-10 py-10 bg-white dark:bg-gray-900 transition">
  <h2 className="text-2xl font-bold mb-4">Skills</h2>
  <div className="flex flex-wrap gap-3">
    {skills.map(skill => (
      <span
        key={skill}
        className="bg-teal-500 dark:bg-teal-600 text-white px-4 py-2 rounded"
      >
        {skill}
      </span>
    ))}
  </div>
    </section>
  )
}
