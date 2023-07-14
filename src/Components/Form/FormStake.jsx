import React, { useMemo } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./FormStake.module.css";
import { SwitchFieldController } from "./ButtonTogle/ButtonToggle";
import Tooltip from "./Tooltip/Tooltip";
import { TextFieldController } from "./TextField/TextField";
import { formatNumber } from "../../utils/FormatNumber";

function FormStake() {
  const available = 5000000;
  const schema = useMemo(() => {
    return yup.object({
      amount: yup
        .number()
        .typeError("This field is required")
        .min(0.00001, "Amount should be bigger than 0.00001")
        .max(available, `Amount should not be bigger than ${available}`)
        .required("This field is required"),
    });
  }, [available]);

  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      stake: true,
      amount: "",
    },
  });

  const stakeUnstake = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const stake = watch("stake");
  const amount = watch("amount");

  // const handelGetPercentage = (percentage) => {
  //   let amount = (percentage * parseFloat(available)) / 100;
  //   setValue("amount", amount);
  // };

  return (
    <form
      onSubmit={handleSubmit(stakeUnstake)}
      style={{ display: "flex", flexDirection: "column", gap: "25px" }}
    >
      <div className="headerForm" style={{ marginBottom: "15px" }}>
        <span className="title">Stake Vanish</span>
        <img src="/images/logo-small.png" alt="Logo" />
      </div>
      <div className={styles.frame}>
        <div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span className={styles.subtitle}>$VANISH earned</span>
            <Tooltip />
          </div>
          <div>
            <span className={styles.spanErned}>1,123,176.64</span>
            <span className={styles.subtitle}>~$3,643.54</span>
          </div>
        </div>
        <span className={styles.time}>2d 23h 48m</span>
      </div>
      <SwitchFieldController
        name="stake"
        control={control}
        options={[
          { value: true, title: "Stake" },
          { value: false, title: "Unstake" },
        ]}
      />{" "}
      <TextFieldController
        label="Amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
        control={control}
        value={amount}
        className="stake"
        helpText={
          <>
            <span className={styles.subtitle}>Available:</span>{" "}
            <span>{formatNumber(available)}</span>
          </>
        }
        prepend={<span className="spanVanish">$VANISH</span>}
        append={
          <>
            <div
              className="btnMax"
              onClick={() => setValue("amount", available)}
            >
              Max
            </div>
          </>
        }
      />
      <div className={styles.blockTotal}>
        <div className={styles.frameTotal}>
          <span className={styles.subtitle}>APR</span>
          <span className={styles.total}>Up to 100%</span>
        </div>
        <div className={styles.frameTotal}>
          <span className={styles.subtitle}>Total Staked</span>
          <span className={styles.total} style={{ letterSpacing: "0.84px" }}>
            1,123,176.64
          </span>
        </div>
      </div>
      <button className="btn" type="submit">
        Stake
      </button>
    </form>
  );
}

export default FormStake;
