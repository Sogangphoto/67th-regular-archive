import "./index.css";
import App from "./home";
import About from "./about";
import Archive from "./archive";
import Photographers from "./photographers";
import Thanks from "./thanks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

const Index = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-fit  bg-[#F1EFEB]">
        <div className="mx-auto flex min-h-screen max-w-[390px] flex-col xl:max-w-7xl">
          <Navigation />
          <div className="flex-1 flex-grow">
            <Routes>
              <Route index element={<App />} />
              <Route path="about/" element={<About />} />
              <Route path="archive/" element={<Archive />} />
              <Route path="photographers/" element={<Photographers />} />
              <Route path="thanks/" element={<Thanks />} />,
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Index;
