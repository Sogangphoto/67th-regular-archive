import "./index.css";
import App from "./home";
import About from "./about";
import Archive from "./archive";
import Photographers from "./photographers";
import Thanks from "./thanks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<App />} />
        <Route path="about/" element={<About />} />
        <Route path="archive/" element={<Archive />} />
        <Route path="photographers/" element={<Photographers />} />
        <Route path="thanks/" element={<Thanks />} />,
      </Routes>
    </BrowserRouter>
  );
};
