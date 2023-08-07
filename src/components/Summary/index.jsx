import React from "react";
import styles from "./style.module.scss";

export const Summary = ({ transactions }) => {
  return (
    <section className={styles.summary__container}>
      <div className="container">
        <h3 className={styles.summary__title}>Resumo financeiro</h3>
        <ul className={styles.summary__cards}>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <li className={transaction.type === "income" ? styles.card_income : styles.card_expense} key={transaction.id}>
                <div>
                  <h3 className={styles.card__title}>
                    {transaction.description}
                  </h3>
                  <p className={styles.card__type}>
                    {transaction.type === "income" ? "Entrada" : "Despesa"}
                  </p>
                </div>
                <div>
                  <p className={styles.card__value}>{transaction.value}</p>
                  <button className={styles.card__button}>Excluir</button>
                </div>
              </li>
            ))
          ) : (
            <h2>Você ainda não possui nenhum lançamento</h2>
          )}
        </ul>
      </div>
    </section>
  );
};
