import styled from 'styled-components';
import { theme } from '../../../../style/Theme';

type ProjectpropType = {
  title: string
  text: string
  stakc: string
  skill: string
  src?: string
  link?: string
  href?: string
};
export const Project = (props: ProjectpropType) => {
  return (
    <StyledProject>
      <Image src={props.src} />
      <InfoBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Stakc>{props.stakc}
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
  background-color: rgb(107, 105, 105);
  max-width: 375px;
  border-radius: 20px;
 
`;
const Image = styled.img``;
const InfoBox = styled.div`
  padding: 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
margin: 15px 0;
`;

const Stakc = styled.p`
  margin-bottom: 20px;
`;

const Skill = styled.span``

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
font-weight: 400;
font-size: 16px;
text-decoration: underline;
color: ${theme.color.fond};
`;
