import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Menu } from "../../components/menu/Menu";

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
    background-color: honeydew;
`;
