import React from "react";
import styles from "./Option.module.css";
function Option({ item, onSelectCurrency }) {
  const handleCurrencySelect = () => {
    console.log(item);
    onSelectCurrency(item);
  };
  return (
    <>
      <li className={styles.option} onClick={handleCurrencySelect}>
        <img src={item.img} alt={item.name} />
        <span> {item.code}</span>
      </li>
    </>
  );
}

export default Option;
