import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Project } from './project/Project';
import projectImg from '../../../assets/imagesProject/project.png';
import { Container } from '../../../components/Container';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle
          title={'Projects'}
          subtitle={'Things I’ve built so far'}
        />
        <FlexContainer wrap={'wrap'} justify={'space-between'}>
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
        </FlexContainer>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
