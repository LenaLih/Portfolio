import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { theme } from "../../../style/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi,</SmallText>
            <Name>I am Elena Likhosherstova</Name>
            <MainTitle>Front-end developer</MainTitle>
          </div>
          <Photo src={photo} />
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: ${theme.color.primaryBg};
  min-height: 100vh;
  display: flex;
`;
const SmallText = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const Name = styled.h2`
  font-size: 45px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;
`;
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`;
const Photo = styled.img`
  overflow: hidden;
  height: 350px;
  object-fit: cover;
  box-shadow: 15px 15px 15px 0 grey;
`;
