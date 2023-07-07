import React, { useState } from "react";
import styles from "./ButtonToggle.module.css";

function ButtonToggle() {
  const [stakeActive, setStakeActive] = useState(true);
  const [unstakeActive, setUnstakeActive] = useState(false);

  const handleStakeClick = (event) => {
    event.preventDefault();
    setStakeActive(true);
    setUnstakeActive(false);
  };

  const handleUnstakeClick = (event) => {
    event.preventDefault();
    setStakeActive(false);
    setUnstakeActive(true);
  };

  return (
    <div className={styles.frameBtns}>
      <button
        className={`${styles.btnToggle} ${stakeActive ? styles.active : ""}`}
        onClick={handleStakeClick}
      >
        Stake
      </button>
      <button
        className={`${styles.btnToggle} ${unstakeActive ? styles.active : ""}`}
        onClick={handleUnstakeClick}
      >
        Unstake
      </button>
    </div>
  );
}

export default ButtonToggle;
