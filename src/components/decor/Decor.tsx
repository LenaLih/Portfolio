import styled from 'styled-components';
import { theme } from '../../style/Theme';

type DecorPropsType = {
  src: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
};

export const Decor = (props: DecorPropsType) => {
  const { src, top, right, left, bottom } = props;
  return (
    <DecorImg src={src} top={top} right={right} left={left} bottom={bottom} />
  );
};

const DecorImg = styled.img<DecorPropsType>`
  position: absolute;
  top: ${(props) => props.top || 'auto'};
  right: ${(props) => props.right || 'auto'};
  left: ${(props) => props.left || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  width: 350px;

  @media ${theme.media.tablet} {
    display: none;
  }

`;
