import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { Form } from "../../components/Form";
import { Summary } from "../../components/Summary";
import { TotalMoney } from "../../components/TotalMoney";
import styles from "./style.module.scss";

export const MainPage = () => {
    const [transactions, setTransactions] = useState([])
  return (
    <DefaultTemplate>
      <div className={styles.main__container}>
        <div>
          <Form transactions={transactions} setTransactions={setTransactions} />
          <TotalMoney transactions={transactions} />
        </div>

        <Summary transactions={transactions} />
      </div>
    </DefaultTemplate>
  );
};
