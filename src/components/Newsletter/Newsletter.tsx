import { useCountdown } from "../../hooks/useCountdown";
import { Container } from "../Container/Container";
import styles from "./Newsletter.module.scss";
import { NewsletterForm } from "./NewsletterForm/NewsletterForm";

export const Newsletter = () => {
  const counter = useCountdown({ startValue: 35000 });

  return (
    <section className={styles.newsletter}>
      <Container>
        <div className={styles.intro}>
          <p>{counter}+ ALREADY JOINED</p>

          <h2>Stay up-to-date with what we're doing</h2>
        </div>

        <NewsletterForm />
      </Container>
    </section>
  );
};
