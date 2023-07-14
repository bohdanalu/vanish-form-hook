import React from "react";
import { useController } from "react-hook-form";

export const TextField = ({
  label,
  name,
  placeholder,
  error,
  hasError,
  helpText,
  className,
  Tooltip,
  readOnly,
  append,
  prepend,
  type,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div className={`inputBlock ${className}`}>
      <div className="flex">
        <label className="label flex" style={{ gap: "15px" }}>
          {label}
          {Tooltip && <Tooltip />}
        </label>
        {helpText && <div>{helpText}</div>}
      </div>
      {prepend && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            height: "48px",
            left: "33px",
            bottom: 0,
            color: "var(--txt-opacity)",
            fontSize: "16px",
            lineHeight: 1.25,
          }}
        >
          {prepend}
        </div>
      )}

      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {append && (
        <div
          style={{
            position: "absolute",
            height: prepend ? "48px" : "58px",
            bottom: 0,
            right: "26px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {append}
        </div>
      )}
      {hasError && (
        <span className="error" style={{ bottom: append ? "-22px" : "15px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export const TextFieldController = ({
  control,
  name,
  label,
  className,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const hasError = Boolean(error?.message);

  return (
    <TextField
      hasError={hasError}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      className={className}
      {...rest}
    />
  );
};
