import styled from 'styled-components';
import { theme } from '../../style/Theme';

type ButtonPropsType = {
  title?: string;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton type={'submit'}>
      <Title>{props.title}</Title>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  transition: all 1s;
  border: 1px solid ${theme.color.aczentFond};
  padding: 6px 10px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 300;
  color: ${theme.color.aczentFond};
  &:hover {
    background-color: ${theme.color.aczentFond};
    color: ${theme.color.fond};
  }
`;

const Title = styled.p`
  color: ${theme.color.aczentFond};
  &:hover {
    color: ${theme.color.fond};
  }
`;
