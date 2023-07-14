import React from "react";
import styles from "./Interest.module.css";

function Interest({ percentage, onGetPercentage }) {
  return (
    <li
      key={percentage}
      className={styles.itemPercent}
      onClick={() => onGetPercentage(percentage)}
    >
      <span>{percentage}</span>
      <span>%</span>
    </li>
  );
}

export default Interest;
