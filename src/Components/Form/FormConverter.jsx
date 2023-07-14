import React, { useMemo } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import styles from "./FormConverter.module.css";
import {
  percentages,
  RECEPIENT_WALLET_ADDRESS_MIN_LENGTH,
  RECEPIENT_WALLET_ADDRESS_MAX_LENGTH,
} from "../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectCurrencyFieldController } from "./SelectCurrency/SelectCurrency";
import Tooltip from "./Tooltip/Tooltip";
import Interest from "./Interest/Interest";
import { TextField, TextFieldController } from "./TextField/TextField";

function FormConverter() {
  const available = 150;

  const schema = useMemo(() => {
    return yup.object({
      recepientWallet: yup
        .string()
        .min(
          RECEPIENT_WALLET_ADDRESS_MIN_LENGTH,
          "Recipient Wallet Address is too short"
        )
        .max(
          RECEPIENT_WALLET_ADDRESS_MAX_LENGTH,
          `Recipient Wallet Address is too long`
        )
        .matches(/^[A-Za-z0-9]*$/, "Wallet address is invalid")
        .required("Recipient Wallet Address is missing"),
      amount: yup
        .number()
        .typeError("This field is required")
        .min(0.00001, "Amount should be bigger than 0.00001")
        .max(available, `Amount should not be bigger than ${available}`)
        .required("Amount is required"),
    });
  }, []);

  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      recepientWallet: "",
      amount: "",
      from: "Ethereum (ETH)",
      to: "Ethereum (ETH)",
    },
  });

  const sendTransfer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const amount = watch("amount");

  const handelGetPercentage = (percentage) => {
    let amount = (percentage * parseFloat(available)) / 100;
    setValue("amount", amount);
  };

  return (
    <form onSubmit={handleSubmit(sendTransfer)} autoComplete="off">
      <div className="headerForm">
        <span className="title">You send</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>
      <SelectCurrencyFieldController
        label="Select source currency"
        name="from"
        readOnly="readOnly"
        control={control}
      />

      <TextFieldController
        label="Enter amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
        control={control}
        value={amount}
        helpText={
          <>
            <span className={styles.span}>Available:</span>{" "}
            <span>{available}</span>
          </>
        }
        append={
          <div className="btnMax" onClick={() => setValue("amount", available)}>
            Max
          </div>
        }
      />
      <ul className={styles.listPer}>
        {percentages.map((per) => (
          <Interest
            percentage={per}
            onGetPercentage={handelGetPercentage}
            key={per}
          />
        ))}
      </ul>
      <span
        className="title"
        style={{ display: "inline-block", marginBottom: "15px" }}
      >
        You Get
      </span>

      <SelectCurrencyFieldController
        label="Select destination currency"
        name="to"
        readOnly="readOnly"
        control={control}
        className="to"
      />
      <TextFieldController
        label="Recipient Wallet address"
        placeholder="Enter wallet address"
        name="recepientWallet"
        control={control}
        className="to"
      />
      <TextField
        label="Fee"
        placeholder="Total"
        helpText="0.002 ETH"
        readOnly="readOnly"
        Tooltip={Tooltip}
        append={<span style={{ fontSize: "16px" }}>0.098 ETH</span>}
      />
      <button className="btn" type="submit">
        Transfer now {isSubmitting && "..."}
      </button>
    </form>
  );
}

export default FormConverter;
