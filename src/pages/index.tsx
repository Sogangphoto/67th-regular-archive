import "./index.css";
import App from "./home";
import About from "./about";
import Archive from "./archive";
import Photographers from "./photographers";
import Thanks from "./thanks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../component/Navigation";

const Index = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-[#F1EFEB] pb-20">
        <div className="mx-auto max-w-7xl">
          <Navigation />
          <Routes>
            <Route index element={<App />} />
            <Route path="about/" element={<About />} />
            <Route path="archive/" element={<Archive />} />
            <Route path="photographers/" element={<Photographers />} />
            <Route path="thanks/" element={<Thanks />} />,
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Index;
