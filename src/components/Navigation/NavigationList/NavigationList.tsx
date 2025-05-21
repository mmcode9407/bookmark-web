import { LoginBtn } from "../LoginBtn/LoginBtn";
import styles from "./NavigationList.module.scss";

export const NavigationList = () => {
  return (
    <ul className={styles.navigationList}>
      <li>
        <a href="#">Features</a>
      </li>

      <li>
        <a href="#">Pricing</a>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>

      <li>
        <LoginBtn />
      </li>
    </ul>
  );
};
