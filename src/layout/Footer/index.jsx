import { memo } from "react";
import Link from "next/link";
import { utm } from "config";
import Icons from "./Icons";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

const FooterBox = styled.footer`
  padding: 10px;
  background-color: var(--blue-to-darker);
  text-align: center;
  color: #fff;
  a {
    color: #fff;
  }
`;

const MadeWith = styled.div`
  font-size: 12px;
`;

const Footer = () => {
  const { t } = useTranslation("common");
  const pp = t("cookie-title");
  return (
    <FooterBox>
      © Copyright 2019-{new Date().getFullYear()} Krychaxp
      <br />
      <Link href="/polityka-prywatnosci">
        <a title={pp}>{pp}</a>
      </Link>
      <br />
      <Icons />
      <MadeWith>
        Made with{" "}
        <a
          href={`https://nextjs.org/${utm}`}
          target="_blank"
          rel="noreferrer noopener"
          title="Nextjs"
        >
          Nextjs
        </a>{" "}
        and{" "}
        <a
          href={`https://reactjs.org/${utm}`}
          target="_blank"
          rel="noreferrer noopener"
          title="React"
        >
          React
        </a>
      </MadeWith>
    </FooterBox>
  );
};

export default memo(Footer);
