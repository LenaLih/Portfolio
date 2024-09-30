import styled from 'styled-components';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../style/Theme';
import { MobileMenu } from './mobileMenu/MobileMenu';

export const Header = () => {
return (
    <StyledHeader>
        <Container>
            <FlexContainer justify={'space-between'} align={'center'}>
          <Logo />
          <Menu />
          <LinkWrite href="">Write me</LinkWrite>
          <MobileMenu/>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.color.primaryBg};
  padding: 20px 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;
const LinkWrite = styled.a`
  color: ${theme.color.aczentFond};
  transition: all 1s;
  font-size: 20px;
  font-weight: 300;
  text-decoration: underline;
  &:hover {
    color: ${theme.color.fond};
  }
`;
