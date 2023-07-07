import React, { useState } from "react";
import Option from "./Options/Option";
import styles from "./DropDown.module.css";
import { currencies } from "../../../constants";

function DropDown({ dataId, onSelectCurrency }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(currencies[0]);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleCurrencySelect = (currency) => {
    setDropdownValue(currency);
    onSelectCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${
        dataId === "from" ? styles.from : styles.to
      }`}
    >
      <div
        id={dataId}
        className={`${styles.dropdownToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        {/* <img src="/images/icons/Ethereum.png" alt="Currency Icon" /> */}
        <img src={dropdownValue.img} alt={dropdownValue.name} />

        <span>{dropdownValue.code}</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {currencies.map((itemCurrency) => (
            <Option
              key={itemCurrency.code}
              item={itemCurrency}
              onSelectCurrency={handleCurrencySelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
