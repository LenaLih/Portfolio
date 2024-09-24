import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icone } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <StyledSkill>
      <Container>
      <SectionTitle title={"My Skills"} subtitle={" Technologies I’ve been working with recently"}/>
      <FlexContainer wrap="wrap" justify="space-between" gap="70px">
        <Icone iconId={"html"} />
        <Icone iconId={"css"} />
        <Icone iconId={"js"} />
        <Icone iconId={"typeScript"} />
        <Icone iconId={"react"} />
        <Icone iconId={"reduxToolkit"} />
        <Icone iconId={"sass"} />
        <Icone iconId={"github"} />
        <Icone iconId={"git"} />
        <Icone iconId={"figma"} />
        <Icone iconId={"styledComponent"} />
        <Icone iconId={"vscode"} />
      </FlexContainer>
      </Container>
    </StyledSkill>
  );
}

const StyledSkill = styled.section`

`
