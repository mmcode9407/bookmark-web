import { useState } from "react";

import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Features.module.scss";
import { tabs } from "./tabs";

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.intro}>
          <h2>Features</h2>

          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className={styles.featuresList}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.featureItem} ${activeTab === tab.id ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}>
              <span>{tab.title}</span>
            </div>
          ))}
        </div>
      </Container>

      <div className={styles.featureContentContainer}>
        <div className={styles.featureImageContainer}>
          <img src={tabs[activeTab].img} alt={tabs[activeTab].title} />

          <div className={styles.blueBg}></div>
        </div>

        <div className={styles.featureContent}>
          <h3>{tabs[activeTab].heading}</h3>

          <p>{tabs[activeTab].description}</p>

          <div className={styles.buttonContainer}>
            <Button variant="primary">{tabs[activeTab].link.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
