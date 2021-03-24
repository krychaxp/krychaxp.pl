import React from "react";
import SEO from "src/seo";
import { utm } from "config";
import Img from "next/image";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const ExpWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Card = styled.a`
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  margin: 10px;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.div`
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  display: flex;
  text-align: left;
  align-items: center;
  padding: 10px 20px;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding-top: 50%;
  display: flex;
  position: relative;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    // padding-top: 60%;
    object-fit: cover;
  }
`;

const websites = [
  ["https://krychaxp.pl", "krychaxp.pl", "/img/img_src/home.png"],
  [`https://strefadb.pl/${utm}`, "strefadb.pl", "/img/img_src/strefadb.png"],
  [
    `http://cfg.lo8.poznan.pl/${utm}`,
    "cfg.lo8.poznan.pl",
    "/img/img_src/cfg.png",
  ],
  [`https://akai.org.pl/${utm}`, "akai.org.pl", "/img/img_src/akai.png"],
  [
    `https://swq.netlify.app/${utm}`,
    "swq.netlify.app (Hackyeah task)",
    "/img/img_src/swq.png",
  ],
];

const Exp = () => {
  const { t } = useTranslation("menu");
  const title = t("experience");
  const websitesList = websites.map((v) => v[1]).reduce((t, v) => `${t}, ${v}`);
  return (
    <>
      <SEO
        title={title}
        image="doswiadczenie.png"
        description={`Moje doświadczenie: ${websitesList}`}
      />
      <h1>{title}</h1>
      <ExpWrapper>
        {websites.map(([link, name, img], i) => (
          <Link href={link} key={i}>
            <Card href={link} target="_blank" rel="noopener">
              <CardWrapper>
                <Img src={img} alt={name} layout="fill" />
                <Title>{name}</Title>
              </CardWrapper>
            </Card>
          </Link>
        ))}
      </ExpWrapper>
    </>
  );
};
export default Exp;
