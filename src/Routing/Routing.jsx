import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Settings from "../components/Settings/Settings";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
