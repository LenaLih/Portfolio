import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icone } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <StyledSkill>
      <SectionTitle title={"Мой технический стег"} subtitle={"Технологии с каторыми я работаю"}/>
      <FlexContainer wrap="wrap">
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
    </StyledSkill>
  );
}

const StyledSkill = styled.section`
background-color: rgb(241, 227, 225);
`
