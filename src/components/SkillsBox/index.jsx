import { memo } from "react";
import Flip from "react-reveal/Flip";
import skills from "./skills";
import { SkillsWrapper, CardWrapper, Title, Icon } from "./index.styles";

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

const SkillsBox = () => (
  <SkillsWrapper>
    {skills.map((props) => (
      <Card {...props} key={props.name} />
    ))}
  </SkillsWrapper>
);

export default memo(SkillsBox);
