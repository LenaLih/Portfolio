import styled from "styled-components";
import { theme } from "../../style/Theme";

type SectionTitlePropsType = {
  title?: string;
  subtitle?: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <TitleBox>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  text-align: center;
`;
const Title = styled.h2`
font-weight: 700;
font-size: 36px;
color: ${theme.color.fond}
`;
const SubTitle = styled.span`
  display: inline-block;
  margin: 50px 0 140px;
  font-weight: 400;
font-size: 27px;
color: ${theme.color.secanaryFond}
`;
