import styles from "./style.module.scss";
export const Input = ({ name, placeholder, id, onChange, value, children }) => {
  return (
    <div>
      <label className={styles.input__label} htmlFor={id}>
        {name}
      </label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        id={id}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};
