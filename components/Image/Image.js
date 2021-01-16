import React from "react";
import styles from "./Image.module.scss";

const Image = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerSection}>
        <div>
          <h1>
            Welcome to <strong>MovieUP.</strong>
          </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
          </p>
        </div>
      </div>
      <div className={styles.imagePoints}>
        <img src="/image-points.svg" alt="Image Points"/>
      </div>
      <div className={styles.colorOverlay}></div>
    </div>
  );
};

export default Image;
