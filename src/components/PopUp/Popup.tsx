import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./Popup.module.scss";

type ModalProps = {
  timeDelay?: number;
  children: React.ReactNode;
};

export const Popup = ({ timeDelay = 30000, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeDelay);

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 20) {
        setIsVisible(true);
      }
    };

    window.addEventListener("mouseout", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", handleMouseMove);
    };
  }, [timeDelay]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button className={styles.close} onClick={handleClose}>
          &times;
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("feature-portal") as HTMLElement,
  );
};
