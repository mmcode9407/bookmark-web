import { useState } from "react";

import { HamburgerIcon } from "../../assets/icons/HamburgerIcon";
import { Container } from "../Container/Container";
import { HamburgerBtn } from "./HamburgerBtn/HamburgerBtn";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import styles from "./Navigation.module.scss";
import { NavigationList } from "./NavigationList/NavigationList";
import { NavigationLogo } from "./NavigationLogo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <NavigationLogo />

          <div className={styles.desktopNav}>
            <NavigationList />
          </div>

          {!isOpen && (
            <HamburgerBtn onClick={handleToggle} ariaLabel="Open menu">
              <HamburgerIcon />
            </HamburgerBtn>
          )}
        </div>

        <MobileMenu isOpen={isOpen} onClose={handleToggle} />
      </Container>
    </nav>
  );
};
