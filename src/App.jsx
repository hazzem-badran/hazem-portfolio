import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Container from "./components/Container";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { lazy, Suspense, memo } from "react";

// Pre-load components for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = memo(() => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
});

export default App;
