import styled from 'styled-components';
import { theme } from '../../../../style/Theme';

type ProjectpropType = {
  title: string;
  text: string;
  stakc: string;
  skill: string;
  src?: string;
  link?: string;
  href?: string;
};
export const Project = (props: ProjectpropType) => {
  return (
    <StyledProject>
      <Image src={props.src} />
      <InfoBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Stakc>
          {props.stakc}
          <Skill>{props.skill}</Skill>
        </Stakc>
        <LinkBox>
          <Link href="#">Live Preview</Link>
          <Link href="#">View Code</Link>
        </LinkBox>
      </InfoBox>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: ${theme.color.fond};
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 99;
`;
const Image = styled.img``;
const InfoBox = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  color: ${theme.color.primaryBg};
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.p`
  margin: 25px 0;
`;

const Stakc = styled.p`
  margin-bottom: 25px;
`;

const Skill = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  font-weight: 700;
  font-size: 15px;
  text-decoration: underline;
  color: ${theme.color.primaryBg};
`;
