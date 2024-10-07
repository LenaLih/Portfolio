import { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../style/Theme';
import { Link } from 'react-scroll';



type MobileMenuProps = {
  items: { title: string; href: string }[]; 
}

export const MobileMenu = ({items}: MobileMenuProps) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => setmenuIsOpen(!menuIsOpen)
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)}}>
        <ul>
        {items.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink onClick={ () => {setmenuIsOpen(false)}}
                activeClass="active"
                to={item.href}
                smooth={true}
                spy={true}
              >{item.title}</NavLink>
            </ListItem>
          );
        })}
          {/* <ListItem>
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
          </ListItem> */}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  right: 0px;
  top: 40px;
  width: 70px;
  height: 70px;
  z-index: 99999;


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
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
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
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ListItem = styled.li``;

const NavLink = styled(Link)`
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
