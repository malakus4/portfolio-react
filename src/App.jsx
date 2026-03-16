import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Layout route */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Route for Work page */}
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />

          {/* Route for About page */}
          <Route path="/about" element={<About />} />

          {/* Route for Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Route>

          {/* Route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
