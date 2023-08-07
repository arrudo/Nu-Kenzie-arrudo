import React, { useState } from "react";
import styles from "./style.module.scss";
import { Input } from "../Input";
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ transactions, setTransactions }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: "income",
  });

  const submit = (e) => {
    e.preventDefault();
  
    if (
      formData.description.trim() !== "" &&
      !isNaN(parseFloat(formData.value)) &&
      parseFloat(formData.value) > 0
    ) {
      const newTransaction = {
        ...formData,
        id: uuidv4(),
      };
  
      setTransactions([...transactions, newTransaction]);
  
      setFormData({
        description: "",
        value: "",
        type: "income",
      });
    } else {
        window.alert('Insira uma descrição e um valor válido')
    }
  };

  const handlePrice = (e) => {
    const newValue = e.target.value; 
    setFormData({ ...formData, value: newValue });
  };
  
  return (
    <form className={styles.form__container}>
      <div className="container">
        <div className={styles.form__controller}>
          <Input
            name={"Descrição"}
            placeholder={"Digite aqui sua descrição"}
            id={"description"}
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          >
            <p>Ex: Compra de roupas</p>
          </Input>

          <Input
            name={"Valor (R$)"}
            placeholder={"1"}
            id={"value"}
            value={formData.value}
            onChange={handlePrice}  
          />
          <label htmlFor="type">Tipo de valor</label>
          <div className={styles.select__wrapper}>
            <div className={styles.custom_select}>
              <select
                value={formData.type}
                onChange={(e) => {
                  setFormData({ ...formData, type: e.target.value });
                }}
                name="type"
                id="type"
              >
                <option value="income">Entrada</option>
                <option value="expense">Despesa</option>
              </select>
            </div>
          </div>

          <button
            onClick={submit}
            type="submit"
            className={styles.form__button}
          >
            Inserir Valor
          </button>
        </div>
      </div>
    </form>
  );
};
