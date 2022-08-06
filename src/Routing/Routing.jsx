import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Settings from "../components/Settings/Settings";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
