import styles from "./Table.module.css";

const Table = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <table className={styles["result"]}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.investmentData.map((data) => (
            <tr>
              <td>{data["year"]}</td>
              <td>{formatter.format(data["savingsEndOfYear"])}</td>
              <td>{formatter.format(data["yearlyInterest"])}</td>
              <td>{formatter.format(data["totalInterest"])}</td>
              <td>{formatter.format(data["investedCapital"])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
