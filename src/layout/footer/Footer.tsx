import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { Icone } from "../../components/icon/Icon";

export const Footer = () => {
return (
   <StyledFooter>
      <FlexContainer direction={"column"} align={"center"}>
         <FooterList>
            <FooterItem>
               <FooterLink href="#">
                  <Icone height={"35px"} width={"35px"} viewBox={"0 0 35 35"} iconId={"telegram"}/>
               </FooterLink>
            </FooterItem>
            <FooterItem>
               <FooterLink href="#">
                  <Icone height={"35px"} width={"35px"} viewBox={"0 0 35 35"} iconId={"linkedin"}/>
               </FooterLink>
            </FooterItem>
            <FooterItem>
               <FooterLink href="#">
                  <Icone height={"35px"} width={"35px"} viewBox={"0 0 35 35"} iconId={"email"}/>
               </FooterLink>
            </FooterItem>
            <FooterItem>
               <FooterLink href="#">
                  <Icone height={"35px"} width={"35px"} viewBox={"0 0 35 35"} iconId={"whatsapp"}/>
               </FooterLink>
            </FooterItem>
         </FooterList>
      </FlexContainer>
   </StyledFooter>
);
}
const StyledFooter = styled.footer`
   background-color: #cfcfdb;
  
`
const FooterList = styled.ul`
   display: flex;
   gap: 50px;
`
const FooterItem = styled.li`

   
`
const FooterLink = styled.a`
   
`