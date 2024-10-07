import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import decorImage from "../../../assets/decors/arrow (1).png";
import { theme } from "../../../style/Theme";

export const Skills = () => {
  return (
    <StyledSkills id={'skills'}>
      <Container>
      <SectionTitle title={"{ My skills }"} subtitle={" Technologies I’ve been working with recently"}/>
      <FlexContainer wrap="wrap" justify="space-around" gap="50px">
        <Icon iconId={"html"} />
        <Icon iconId={"css"} />
        <Icon iconId={"js"} />
        <Icon iconId={"typeScript"} />
        <Icon iconId={"react"} />
        <Icon iconId={"reduxToolkit"} />
        <Icon iconId={"sass"} />
        <Icon iconId={"github"} />
        <Icon iconId={"git"} />
        <Icon iconId={"figma"} />
        <Icon iconId={"styledComponent"} />
        <Icon iconId={"vscode"} />
      </FlexContainer>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  overflow: hidden;

  ${FlexContainer} {
    position: relative;
    ::before {
    content: "";
    display: block;
    background-image: url(${decorImage});
    position: absolute;
    width: 400px;
    height: 250px;
    top: -260px;
    left: -100px;

    @media ${theme.media.tablet} {
    display: none;
  }
  }
  }

`
