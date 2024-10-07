import styled from 'styled-components';
import { font } from '../../style/Common';
import { theme } from '../../style/Theme';

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
position: relative;
  text-align: center;
  z-index: 99;
`;
const Title = styled.h2`
  ${font({weight: 700, color: theme.color.fond, Fmax: 30, Fmin: 25})}
`;
const SubTitle = styled.span`
${font({weight: 400, color: theme.color.aczentFond, Fmax: 27, Fmin: 23})}
  display: inline-block;
  margin: 50px 0 75px;
`;
