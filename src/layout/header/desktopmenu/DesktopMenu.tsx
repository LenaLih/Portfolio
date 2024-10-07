import { Link } from 'react-scroll';
import styled from 'styled-components';
import { theme } from '../../../style/Theme';

type StyledMenuProps = {
  items: { title: string; href: string }[];
};

export const DesktopMenu = ({ items }: StyledMenuProps) => {
  return (
    <StyledMenu>
      <ul>
        {items.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink
                activeClass="active"
                to={item.href}
                smooth={true}
                spy={true}
                offset={-30}
              >
                {item.title}
              </NavLink>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
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
  &:hover,
  &.active {
    background-color: ${theme.color.aczentFond};
    color: ${theme.color.fond};
  }
`;
