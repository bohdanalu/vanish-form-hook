import React from "react";
import DropDown from "../DropDown/DropDown";

function SelectCurrency({ values, setValuesCurrency }) {
  const { id, name, type, readOnly, label, value } = values;

  const handleCurrencyChange = (currency) => {
    setValuesCurrency((prevValues) => {
      const updatedValues = prevValues.map((item) =>
        item.id === id
          ? { ...item, value: `${currency.name} (${currency.code})` }
          : item
      );
      console.log(updatedValues);
      return updatedValues;
    });
  };
  const handleInputFocus = () => {
    const dropdown = document.getElementById(id);
    if (dropdown) {
      dropdown.click();
    }
  };

  return (
    <div className={`${id === "to" ? "inputBlock to" : "inputBlock"}`}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        name={name}
        className="input"
        type={type}
        style={{ textAlign: "right", color: "var(--txt-opacity)" }}
        value={value}
        onChange={handleCurrencyChange}
        onFocus={handleInputFocus}
        readOnly={readOnly}
      />
      <DropDown dataId={id} onSelectCurrency={handleCurrencyChange} />
    </div>
  );
}

export default SelectCurrency;
