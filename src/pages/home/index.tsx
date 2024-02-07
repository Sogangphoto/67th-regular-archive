import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navigation from "../../component/Navigation";
import styles from "./index.module.css";

function Index() {
  const TestDiv = styled.div`
    background-color: skyblue;
    height: ${window.outerHeight}px;
  `;
  return (
    <>
      {/* <Navigation opacityHeight={window.outerHeight} />
      <div className={styles.container}>Home page</div>
      <div style={{ height: "2000px" }}></div> */}

      <div className="container flex h-screen flex-col items-center justify-center bg-neutral-50">
        <div className="font text-center text-2xl text-neutral-900">
          준비중입니다.
        </div>
        <div className="h-32"></div>
        <div className="w-16">
          <img src="sogangphoto_logo.png" />
        </div>
      </div>
    </>
  );
}

export default Index;
