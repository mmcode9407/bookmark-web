import { IllustrationHero } from "../../assets/images/IllustrationHero";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <IllustrationHero />

        <div className={styles.blueBg}></div>
      </div>

      <Container>
        <div className={styles.heroContent}>
          <h1>A Simple Bookmark Manager</h1>

          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className={styles.buttonGroup}>
            <Button variant="primary">Get it on Chrome</Button>

            <Button variant="secondary">Get it on Firefox</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
