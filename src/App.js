import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import React, { useState } from "react";

function App() {
  const [investmentData, setInvestmentData] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const investmentDataHandler = (data) => {
    setIsCalculated(true);
    calculateHandler(data);
  };
  const resetClickHandler = () => {
    setIsCalculated(false);
    setInvestmentData();
  };
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest:
          i == 0
            ? yearlyInterest
            : yearlyData[i - 1]["totalInterest"] + yearlyInterest,
        investedCapital:
          +userInput["currentSavings"] + yearlyContribution * (i + 1),
      });
    }
    // console.log(yearlyData);
    setInvestmentData(yearlyData);
  };
  return (
    <div>
      <Header logo={logo}>Investment calculator</Header>
      <Form onSubmit={investmentDataHandler} onClickReset={resetClickHandler} />
      {!isCalculated && (
        <div className="fallback-text">No investment calculated yet.</div>
      )}
      {isCalculated && <Table investmentData={investmentData} />}
    </div>
  );
}

export default App;
