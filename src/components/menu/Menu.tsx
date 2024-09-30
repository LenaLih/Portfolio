import styled from 'styled-components';
import { theme } from '../../style/Theme';

export const Menu = () => {
  return (
    <StyledMenu>
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
