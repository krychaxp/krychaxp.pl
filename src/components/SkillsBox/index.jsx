import { memo } from "react";
import Flip from "react-reveal/Flip";
import skills from "./skills";
import {
  SkillsWrapper,
  CardWrapper,
  Title,
  Icon,
  ImgWrapper,
} from "./index.styles";
import Img from "next/image";
import Link from "next/link";

const Card = ({ icon, color, name }) => {
  return (
    <Flip left>
      <CardWrapper bgcolor={color}>
        <Icon>{icon}</Icon>
        <Title>{name}</Title>
      </CardWrapper>
    </Flip>
  );
};

const SkillsBox = () => {
  const lighthouse = "/img/lighthouse.png";
  return (
    <>
      <SkillsWrapper>
        {skills.map((props) => (
          <Card {...props} key={props.name} />
        ))}
      </SkillsWrapper>
      <Link href={lighthouse}>
        <ImgWrapper href={lighthouse} title="lighthouse result">
          <Img src={lighthouse} width="1100" height="700" />
        </ImgWrapper>
      </Link>
    </>
  );
};

export default memo(SkillsBox);
