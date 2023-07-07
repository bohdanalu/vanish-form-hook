import React from "react";
import styles from "./Percents.module.css";

function Percents({ percent, onGetPercent }) {
  return (
    <li
      key={percent}
      className={styles.itemPercent}
      onClick={() => onGetPercent(percent)}
    >
      <span>{percent}</span>
      <span>%</span>
    </li>
  );
}

export default Percents;
