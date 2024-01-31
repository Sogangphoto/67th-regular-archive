import "./index.css";
import styled from "styled-components";
import App from "./home";
import About from "./about";
import Archive from "./archive";
import Photographers from "./photographers";
import Thanks from "./thanks";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="about/" element={<About />} />
      <Route path="archive/" element={<Archive />} />
      <Route path="photographers/" element={<Photographers />} />
      <Route path="thanks/" element={<Thanks />} />
    </Route>,
  ),
);

export default () => {
  return <RouterProvider router={router} />;
};
