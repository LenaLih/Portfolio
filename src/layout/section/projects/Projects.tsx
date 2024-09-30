import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Project } from './project/Project';
import projectImg from '../../../assets/imagesProject/project.png';
import { Container } from '../../../components/Container';
import decor from '../../../assets/Decors/star.png'
import { Decor } from '../../../components/decor/Decor'

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle
          title={'{ Projects }'}
          subtitle={'Things I’ve built so far'}
        />
        <FlexContainer wrap={'wrap'} justify={'space-between'} gap={'20px'}>
          <Project
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
            stakc={'Tech stack: '}
            skill={'HTML, JavaScript, SASS, React'}
            src={projectImg}
          />
          <Project
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
            stakc={'Tech stack: '}
            skill={'HTML, JavaScript, SASS, React'}
            src={projectImg}
          />
          <Project
            title={'Project Tile goes here'}
            text={
              'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
            }
            stakc={'Tech stack: '}
            skill={'HTML, JavaScript, SASS, React'}
            src={projectImg}
          />
          <Decor src={decor} top={'-35px'} right={'-150px'}/>
        </FlexContainer>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`

`;


