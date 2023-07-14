import React from "react";
import { useController } from "react-hook-form";
import DropDown from "../DropDown/DropDown";

export const SelectCurrencyField = ({
  label,
  value,
  name,
  onChange,
  readOnly,
  className,
}) => {
  const handleCurrencyChange = (currency) => {
    onChange(`${currency.name} (${currency.code})`);
  };

  const handleInputFocus = () => {
    const dropdown = document.getElementById(name);
    if (dropdown) {
      dropdown.click();
    }
  };

  return (
    <div className={`inputBlock ${className ? className : ""}`}>
      <label className="label">{label}</label>
      <input
        className="input"
        name={name}
        style={{ textAlign: "right", color: "var(--txt-opacity)" }}
        onFocus={handleInputFocus}
        readOnly={readOnly}
        value={value}
      />
      <DropDown dataId={name} onSelectCurrency={handleCurrencyChange} />
    </div>
  );
};

export const SelectCurrencyFieldController = ({
  control,
  name,
  label,
  className,
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <SelectCurrencyField
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      className={className}
      onBlur={onBlur}
    />
  );
};
