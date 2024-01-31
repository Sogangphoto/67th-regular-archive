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
      <Navigation opacityHeight={window.outerHeight} />
      <div className={styles.container}>Home page</div>
      <div style={{ height: "2000px" }}></div>
    </>
  );
}

export default Index;
