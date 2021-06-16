import Flip from 'react-reveal/Flip';
import { skills } from './skills';
import { SkillsWrapper, CardWrapper, Title, Icon, ImgWrapper } from './index.styles';
import Img from 'next/image';
import Link from 'next/link';

const Card = ({ icon, color, name }) => (
  <Flip left>
    <CardWrapper bgcolor={color}>
      <Icon>{icon}</Icon>
      <Title>{name}</Title>
    </CardWrapper>
  </Flip>
);

export const SkillsBox = () => {
  const lighthouse = '/img/lighthouse.png';
  return (
    <>
      <SkillsWrapper>
        {skills.map((props) => (
          <Card {...props} key={props.name} />
        ))}
      </SkillsWrapper>
      <Link href={lighthouse} passHref>
        <ImgWrapper title="lighthouse result">
          <Img src={lighthouse} width="1100" height="700" alt="lighthouse result" />
        </ImgWrapper>
      </Link>
    </>
  );
};
