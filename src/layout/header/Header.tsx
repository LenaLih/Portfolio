
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Menu } from "../../components/menu/Menu";
import { theme } from "../../style/Theme";

export const Header = () => {
return (
    <StyledHeader>
        <Container>
            <Menu />
        </Container>
    </StyledHeader>
);
}

const StyledHeader = styled.header`
    background-color: ${theme.color.primaryBg};
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
`;
