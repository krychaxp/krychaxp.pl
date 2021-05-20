import { useState, useEffect, memo } from "react";
import Link from "next/link";
import { SettingsButton } from "./SettingsButton";
import { MenuButton } from "./MenuButton";
import { Buttons, HeaderTop, Logo } from "./index.styles";

const Component = () => {
  const [headerIsScrolling, setHeaderIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderIsScrolling(!!window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderTop data-scrolled={headerIsScrolling}>
      <Link href="/" passHref>
        <Logo title="Strona głowna">krychaxp.pl</Logo>
      </Link>
      <Buttons>
        <SettingsButton />
        <MenuButton />
      </Buttons>
    </HeaderTop>
  );
};

export const Header = memo(Component);
