import styled from "styled-components";
import { theme } from "../../style/Theme";

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
    justify-content: end;
    margin-right: 30px;
  }
`;
const ListItem = styled.li`
  transition: all 1s;
  &:hover {
    border-top: solid 2px;
    border-bottom: solid 2px;
    letter-spacing: 0.5em;
    transition: 1s;
    color: ${theme.color.fond};
  }
`;

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.color.fond};
`;
