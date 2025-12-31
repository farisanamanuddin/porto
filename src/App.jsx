import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  );
}
