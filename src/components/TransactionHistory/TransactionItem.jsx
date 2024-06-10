import PropTypes from "prop-types";
import { capitalize } from "../utils/capitalize";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.transactionItem}>
      <td>{capitalize(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
