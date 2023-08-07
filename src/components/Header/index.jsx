import headerLogo from "../../assets/Nu-Kenzie.svg";
import styles from "./style.module.scss";
export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className="container">
        <img
          className={styles.header__image}
          src={headerLogo}
          alt="Logo Nu Kenzie"
        />
      </div>
    </header>
  );
};
