import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SocialIcons } from "../../SocialLinks/SocialLinks";
import { HamburgerBtn } from "../HamburgerBtn/HamburgerBtn";
import { NavigationList } from "../NavigationList/NavigationList";
import { NavigationLogo } from "../NavigationLogo";
import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileNavbarContainer}>
      <div className={styles.mobileNavbar}>
        <NavigationLogo dark />

        <HamburgerBtn onClick={onClose} ariaLabel="Close menu">
          <CloseIcon />
        </HamburgerBtn>
      </div>

      <NavigationList />

      <SocialIcons />
    </div>
  );
};
