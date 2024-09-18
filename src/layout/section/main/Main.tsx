import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"}>
        <div>
          <span>Привет,</span>
          <Name>я Елена Лихошерстова</Name>
          <h1>Front-end разработчик</h1>
        </div>
        <Photo src={photo} />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  // min-height: 100vh;
  background-color:honeydew;
`
const Name = styled.h2`

`

const Photo = styled.img`
  border-radius: 5%;
  overflow: hidden;
  height: 350px;
  object-fit: cover;
`
