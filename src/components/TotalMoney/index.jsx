import React from "react";
import styles from "./style.module.scss";

export const TotalMoney = ({ transactions }) => {
  const total = calculateTotal(transactions);

  if (transactions.length === 0) {
    return null;
  }

  return (
    <section className={styles.totalMoney__container}>
      <div className="container">
        <div className={styles.totalMoney__controller}>
          <div>
            <h3>Valor total:</h3>
            <span>
              R$
              {total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <p>O valor se refere ao saldo</p>
        </div>
      </div>
    </section>
  );
};

const calculateTotal = (transactions) => {
  return transactions.reduce((total, transaction) => {
    const transactionValue = parseFloat(transaction.value);
    return (
      total +
      (transaction.type === "income" ? transactionValue : -transactionValue)
    );
  }, 0);
};
