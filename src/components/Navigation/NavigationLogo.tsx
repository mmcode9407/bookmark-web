import { BookmarkLogo } from "../../assets/logos/BookmarkLogo";

type NavigationLogoProps = {
  dark?: boolean;
};

export const NavigationLogo = ({ dark }: NavigationLogoProps) => {
  return <BookmarkLogo dark={dark} />;
};
