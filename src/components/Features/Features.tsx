import { useState } from "react";

import { Container } from "../Container/Container";
import { Popup } from "../PopUp/Popup";
import { FeatureContent } from "./FeatureContent/FeatureContent";
import styles from "./Features.module.scss";
import { tabs } from "./tabs";

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Popup>
        <FeatureContent tab={tabs[1]} />
      </Popup>

      <section className={styles.features}>
        <Container>
          <div className={styles.intro}>
            <h2>Features</h2>

            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
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

        <FeatureContent tab={tabs[activeTab]} />
      </section>
    </>
  );
};
