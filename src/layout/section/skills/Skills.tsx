import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Decor } from "../../../components/decor/Decor";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import decor from "../../../assets/decors/arrow (1).png";

export const Skills = () => {
  return (
    <StyledSkills id={'skills'}>
      <Container>
      <SectionTitle title={"{ My skills }"} subtitle={" Technologies I’ve been working with recently"}/>
      <FlexContainer wrap="wrap" justify="space-between" gap="50px">
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
        <Decor src={decor} bottom={'200px'} left={'-150px'}/>
      </FlexContainer>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`

`
