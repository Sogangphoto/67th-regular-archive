import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navigation from "../../component/Navigation";
import styles from "./index.module.css";

function Index() {
  return (
    <>
      <Navigation />
      <div className={styles.container}>Home page</div>
    </>
  );
}

export default Index;
