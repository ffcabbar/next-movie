import React from "react";
import styles from "./Image.module.scss";

const Image = () => {
  return (
    <div className={styles.container}>
      <h1>Image Overlay</h1>
      <div className={styles.colorOverlay}></div>
    </div>
  );
};

export default Image;
