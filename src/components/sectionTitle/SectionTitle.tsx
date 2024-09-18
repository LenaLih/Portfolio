
import styled from "styled-components";

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
const Title = styled.h2``;
const SubTitle = styled.span``;
