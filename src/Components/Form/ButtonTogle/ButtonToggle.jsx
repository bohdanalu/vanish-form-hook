import React, { useState } from "react";
import styles from "./ButtonToggle.module.css";

import { useController } from "react-hook-form";

export const SwitchField = ({ value, onChange, options }) => {
  return (
    <div className={styles.frameBtns}>
      {options.map((o, idx) => (
        <div
          className={`${styles.btnToggle} ${value === o.value ? "active" : ""}`}
          style={{
            background:
              value === o.value ? "var(--bg-secondary)" : "transparent",
            color: value === o.value ? "var(--txt-color)" : "#8e959e",
          }}
          key={idx}
          onClick={() => onChange(o.value)}
        >
          {o.title}
        </div>
      ))}
    </div>
  );
};

export const SwitchFieldController = ({
  control,
  name,
  label,
  className,
  options,
  ...rest
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <SwitchField
      value={value}
      name={name}
      onChange={onChange}
      className={className}
      options={options}
      {...rest}
    />
  );
};
