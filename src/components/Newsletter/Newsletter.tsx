import { Container } from "../Container/Container";
import styles from "./Newsletter.module.scss";
import { NewsletterForm } from "./NewsletterForm/NewsletterForm";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <Container>
        <div className={styles.intro}>
          <p>35,000+ ALREADY JOINED</p>

          <h2>Stay up-to-date with what we're doing</h2>
        </div>

        <NewsletterForm />
      </Container>
    </section>
  );
};
