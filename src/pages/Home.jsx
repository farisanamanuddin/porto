import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <PageWrapper>
      <SEO
        title="Muhammad Farisan Amanuddin | Portfolio"
        description="Web Developer & AI Enthusiast"
      />

      <section className="hero">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Halo, saya Farisan 👋
        </motion.h1>

        <p>Web Developer & AI Enthusiast</p>
      </section>

      <Experience />
      <Education />
      <Projects />
    </PageWrapper>
  );
}
