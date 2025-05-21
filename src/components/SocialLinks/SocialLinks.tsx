import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { TwitterIcon } from "../../assets/icons/TwitterIcon";
import styles from "./SocialLinks.module.scss";

export const SocialIcons = () => {
  return (
    <div className={styles.socials}>
      <a href="#" aria-label="Facebook">
        <FacebookIcon />
      </a>
      <a href="#" aria-label="Twitter">
        <TwitterIcon />
      </a>
    </div>
  );
};
