import React from "react";
import SEO from "src/seo";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";

const SkillsBox = dynamic(() => import("../../components/SkillsBox"), {
  ssr: false,
});

const Skills = () => {
  const { t } = useTranslation("menu");
  const title = t("skills");
  return (
    <>
      <SEO
        title={title}
        image="umiejetnosci.png"
        description="Moje umiejętości: html, js, css, aws, animacje, netlify, react, microsoft office, next.js, gatsby, git, github, node, express, seo, npm, api, rwd, scss"
      />
      <h1>{title}</h1>
      <SkillsBox />
    </>
  );
};

export default Skills;

export const getStaticProps = () => {
  return { props: {} };
};
