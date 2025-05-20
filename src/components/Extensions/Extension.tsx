import { BgDots } from "../../assets/images/BgDots";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { browsers } from "./browsers";
import styles from "./Extension.module.scss";

export const Extension = () => {
  return (
    <section className={styles.extension}>
      <Container>
        <div className={styles.intro}>
          <h2>Download the extension</h2>

          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <ul className={styles.browsers}>
          {browsers.map((browser) => (
            <li className={styles.browserCard}>
              {browser.logo}

              <div className={styles.browserContent}>
                <h3 className={styles.browserName}>Add to {browser.name}</h3>

                <p className={styles.browserVersion}>
                  Minimum version {browser.version}
                </p>
              </div>

              <BgDots />

              <div className={styles.buttonContainer}>
                <Button variant="primary">Add & Install Extension</Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
