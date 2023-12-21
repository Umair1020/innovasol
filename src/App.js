import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Aboutus from "./pages/Aboutus";
import OurTechnology from "./pages/Technology/OurTechnology";
import Portfolio from "./pages/Portfolio/Portfolio";
import Webdevelopment from "./pages/Portfolio/Webdevelopment";
import Mobapp from "./pages/Portfolio/Mobapp";
import Social from "./pages/Portfolio/Social";
import Ui from "./pages/Portfolio/Ui";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/technology" element={<OurTechnology />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/web" element={<Webdevelopment />} />
      <Route path="/portfolio/App" element={<Mobapp />} />
      <Route path="/portfolio/social" element={<Social />} />
      <Route path="/portfolio/graphicdesigning" element={<Ui />} />
    </Routes>
  );
}
export default App;
