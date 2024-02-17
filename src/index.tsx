import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages";

const Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

Root.render(
  <React.StrictMode>
    <title>서광회 제67회 정기전 아카이빙</title>
    {/* <Helmet>
      <meta charSet="utf-8" />
      <meta property="og:title" content="서광회 제67회 정기전 아카이빙" />
    </Helmet> */}
    <App />
  </React.StrictMode>,
);
