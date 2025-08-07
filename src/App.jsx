import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { lazy, Suspense } from "react";

function App() {
  
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Contact = lazy(() => import("./pages/Contact"));

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
