import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const expectedInterestChangeHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const investmentDurationChangeHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const InvestmentData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedInterest: expectedInterest,
      investmentDuration: investmentDuration,
    };
    props.onSubmit(InvestmentData);
  };

  const resetHandler = () => {
    props.onClickReset();
    setCurrentSavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
    setYearlySavings("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={expectedInterestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={investmentDurationChangeHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
