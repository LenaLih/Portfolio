import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Project } from "./project/Project";
import projectImg from "../../../assets/imagesProject/project.png"

export const Projects = () => {
   return (
      <StyledProjects>
         <SectionTitle title={"Проекты"} subtitle={"Проеккты над каторыми я работала"}/>
         <FlexContainer wrap={"wrap"} justify={"space-around"}>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
            <Project title={"Название Проекта"} text={"Проекты"} stakc={"Проекты"} src={projectImg}/>
         </FlexContainer>
      </StyledProjects>
   );
   }

   const StyledProjects = styled.section`
   
   `