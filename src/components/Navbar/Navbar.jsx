import logo from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logotip} src={logo} alt="logo" />
        <ul className={styles.navList}>
          <li>
            <a href="#">Vakansiyalar</a>
          </li>
          <li>
            <a href="#">Kandidatlar</a>
          </li>
          <li>
            <a href="#">Kompaniyalar</a>
          </li>
          <li>
            <a href="#">Xizmatlar</a>
          </li>
          <li>
            <a href="#">Ta’lim</a>
          </li>
        </ul>
        <div className={styles.languageSelector}>
          <select>
            <option value="uzbek">O'zbek</option>
            <option value="russia">Русский</option>
            <option value="english">English</option>
          </select>
        </div>
        <button className={styles.startButton}>Boshlash</button>
      </div>
    </div>
  );
}

export default Navbar;
