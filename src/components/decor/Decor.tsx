import styled from 'styled-components';

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
  height: 400px;
`;
