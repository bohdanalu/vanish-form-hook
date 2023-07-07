import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./FormConverter.module.css";
import { percents, inputsCurrency } from "../../constants";
import SelectCurrency from "./SelectCurrency/SelectCurrency";
import Tooltip from "./Tooltip/Tooltip";
import Percents from "./Percents/Percents";

function FormConverter() {
  const [valuesCurrency, setValuesCurrency] = useState(inputsCurrency);
  const [avaliable, setAvaliable] = useState(100);
  const [fee, setFee] = useState(0.002);
  const [total, setTotal] = useState(100);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(register);
    alert(JSON.stringify(data));
  };

  const amount = watch("amount");

  useEffect(() => {
    setTotal(amount - amount * fee);
  }, [amount, fee]);

  const handelGetPercent = (percent) => {
    const selectedPercent = percents.find((item) => item === percent);
    const amount = (selectedPercent * parseFloat(avaliable)) / 100;
    setValue("amount", amount);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="headerForm">
        <span className="title">You send</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>
      <SelectCurrency
        values={valuesCurrency[0]}
        setValuesCurrency={setValuesCurrency}
      />
      <div
        className="inputBlock"
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "25px",
        }}
      >
        <div>
          <div className={styles.flex}>
            <label className="label">Enter amount</label>
            <span className="label">
              Avaliable: <span className={styles.span}>{avaliable}</span>{" "}
            </span>
          </div>
        </div>
        <input
          className="input"
          type="number"
          {...register("amount", { min: 0.00001, max: avaliable })}
        />
        {errors.amount && (
          <span className="error">
            {errors.amount.type === "required"
              ? "Amount is required"
              : errors.amount.type < 0.00001
              ? "Amount should be greater than or equal to 0.00001"
              : errors.amount.type > avaliable
              ? "Amount should not exceed ${avaliable}"
              : ""}
          </span>
        )}
        <div
          className={styles.btnMax}
          onClick={() => setValue("amount", avaliable)}
        >
          Max
        </div>
        <ul className={styles.listPer}>
          {percents.map((per) => (
            <Percents percent={per} onGetPercent={handelGetPercent} key={per} />
          ))}
        </ul>
      </div>
      <span
        className="title"
        style={{ display: "inline-block", marginBottom: "15px" }}
      >
        You Get
      </span>

      <SelectCurrency
        values={valuesCurrency[1]}
        setValuesCurrency={setValuesCurrency}
      />
      <div className="inputBlock">
        <input
          className="input"
          type="text"
          placeholder="Enter wallet address"
          {...register("recipientWallet", {
            required: true,
            maxLength: 36,
            minLength: 25,
          })}
        />
        {errors.recipientWallet && (
          <span className="error">
            {errors.recipientWallet.type === "required"
              ? "Recipient Wallet is required"
              : errors.recipientWallet.type === "minLength"
              ? "Recipient Wallet should be at least 25 characters long"
              : errors.recipientWallet.type === "maxLength"
              ? "Recipient Wallet should not exceed 36 characters"
              : ""}
          </span>
        )}

        <label className="label">Recipient Wallet address</label>
      </div>

      <div className="inputBlock">
        <div className={styles.flex}>
          <div className={styles.flex} style={{ gap: "17px" }}>
            <label className="label" style={{ textTransform: "uppercase" }}>
              Fee
            </label>
            <Tooltip />
          </div>
          <span className={styles.span}>
            {fee} <span className={styles.span}> ETH</span>{" "}
          </span>
        </div>
        <div
          className="input"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span className="label">Total</span>
          <span>{total}</span>
        </div>
      </div>
      <button className="btn" type="submit">
        Transfer now
      </button>
    </form>
  );
}

export default FormConverter;
