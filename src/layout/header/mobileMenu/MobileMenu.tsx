import styled, { css } from 'styled-components';
import { theme } from '../../../style/Theme';

type MobileMenuPropsType = {
  isOpen?: boolean
}
export const MobileMenu = (props:MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <ul>
          <ListItem>
            <Link href="">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="">Skills</Link>
          </ListItem>
          <ListItem>
            <Link href="">Projects</Link>
          </ListItem>
          <ListItem>
            <Link href="">Contact</Link>
          </ListItem>
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
display: none;
  position: fixed;
  right: 150px;
  top: 40px;
  width: 70px;
  height: 70px;
  z-index: 9999;

  @media ${theme.media.tablet} {
    display: flex;
  }
  span {
    position: absolute;
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${theme.color.aczentFond};
    right: 40px;
    bottom: 50px;

    &::before,
    ::after {
      content: '';
      position: absolute;
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.aczentFond};
    }
    &::before {
      transform: translateY(-10px);
    }
    &::after {
      transform: translateY(10px);
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      span {
        background-color: transparent;

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    `}
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${theme.color.primaryBg};
  z-index: 999;
  display: ${ props  => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ListItem = styled.li``;

const Link = styled.a`
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
