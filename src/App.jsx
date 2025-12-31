import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ThemeToggle />

      <PageWrapper>
        <Hero />
        <Experience />
        <Projects />
      </PageWrapper>
    </main>
  );
}

export default App;
