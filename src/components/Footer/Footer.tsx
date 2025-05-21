import { BookmarkLogo } from "../../assets/logos/BookmarkLogo";
import { Container } from "../Container/Container";
import { SocialIcons } from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <BookmarkLogo dark />

            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="#">FEATURES</a>
                </li>

                <li className={styles.navItem}>
                  <a href="#">PRICING</a>
                </li>

                <li className={styles.navItem}>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
};
