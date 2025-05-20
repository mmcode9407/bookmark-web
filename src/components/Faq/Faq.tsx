import { Accordion } from "../Accordion/Accordion";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Faq.module.scss";
import { faqItems } from "./faqItems";

export const Faq = () => {
  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.intro}>
          <h2>Frequently Asked Questions</h2>

          <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        <Accordion items={faqItems} />

        <div className={styles.moreInfo}>
          <Button variant="primary" className={styles.moreInfoButton}>
            More Info
          </Button>
        </div>
      </Container>
    </section>
  );
};
