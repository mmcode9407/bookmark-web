import styles from "./HamburgerBtn.module.scss";

type HamburgerBtnProps = {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export const HamburgerBtn = ({
  onClick,
  children,
  ariaLabel,
}: HamburgerBtnProps) => {
  return (
    <button
      className={styles.hamburgerBtn}
      onClick={onClick}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};
