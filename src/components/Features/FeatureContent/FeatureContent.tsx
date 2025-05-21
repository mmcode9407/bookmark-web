import { Button } from "../../Button/Button";
import type { Tab } from "../types";
import styles from "./FeatureContent.module.scss";

type FeatureContentProps = {
  tab: Tab;
};

export const FeatureContent = ({ tab }: FeatureContentProps) => {
  return (
    <div className={styles.featureContentContainer}>
      <div className={styles.featureImageContainer}>
        <img src={tab.img} alt={tab.title} />

        <div className={styles.blueBg}></div>
      </div>

      <div className={styles.featureContent}>
        <h3>{tab.heading}</h3>

        <p>{tab.description}</p>

        <div className={styles.buttonContainer}>
          <Button variant="primary">{tab.link.label}</Button>
        </div>
      </div>
    </div>
  );
};
