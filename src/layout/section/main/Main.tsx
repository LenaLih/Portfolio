import styled from 'styled-components';
import photo from '../../../assets/images/Photo.webp';
import { Container } from '../../../components/Container';
import { FlexContainer } from '../../../components/FlexContainer';
import { theme } from '../../../style/Theme';
import Typewriter from 'typewriter-effect';
import { font } from '../../../style/Common';


export const Main = () => {
  return (
    <StyledMain id={'home'}>
      <Container>
        <FlexContainer align={'center'} justify={'space-around'} wrap={'wrap'}>
          <MainTitleWrapper>
            <MainTitle>
              <p>Front-end developer</p>
              <Typewriter
                options={{
                  strings: ['Front-end developer'],
                  autoStart: true,
                  loop: true,
                  delay: 150
                }}
              />
            </MainTitle>
            <SmallText>Hi, I am</SmallText>
            <Name>Elena Likhosherstova</Name>
            <Description>
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </Description>
          </MainTitleWrapper>
          <Photo src={photo} />
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: ${theme.color.primaryBg};
  min-height: 100vh;
  padding: 130px 0 0;
  display: flex;
  color: ${theme.color.fond};

`;

const MainTitleWrapper = styled.div`
  ${font({weight: 400, lineHeight: 1.5, Fmax: 40, Fmin: 28})}
`;
const SmallText = styled.span``;
const Name = styled.h2`
${font({weight: 400, lineHeight: 1.5, Fmax: 40, Fmin: 28})}
  margin-bottom: 10px;
`;
const MainTitle = styled.h1`
${font({weight: 700, lineHeight: 1.5, Fmax: 40, Fmin: 28})}
  color: ${theme.color.aczentFond};
  p {
  display: none;
  }
`;
const Description = styled.p`
  max-width: 440px;
  font-size: 19px;
  color: ${theme.color.fond};
`;

const Photo = styled.img`
  overflow: hidden;
  object-fit: cover;
  width: 500px;


  @media ${theme.media.mobile} {
    width: 380px;
  }

`;
