import React, { useState } from "react";
import styles from "./Tooltip.module.css";

function Tooltip() {
  const [isVisible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div className={styles.tooltipContainer}>
      <div
        className={styles.btnTooltip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src="/images/icons/info.svg" alt="Info" />
      </div>
      {isVisible && (
        <div className={styles.tooltip}>
          <span>Tooltip content</span>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
