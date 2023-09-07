import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { Form } from "../../components/Form";
import { Summary } from "../../components/Summary";
import { TotalMoney } from "../../components/TotalMoney";
import styles from "./style.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainPage = () => {
  const [transactions, setTransactions] = useState([]);
  return (
    <>
      <DefaultTemplate>
        <div className={styles.main__container}>
          <div>
            <Form
              transactions={transactions}
              setTransactions={setTransactions}
            />
            <TotalMoney transactions={transactions} />
          </div>

          <Summary
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </DefaultTemplate>
    </>
  );
};
