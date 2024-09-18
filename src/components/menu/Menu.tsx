import styled from "styled-components";



export const Menu = () => {
   return (
         <StyledMenu>
            <ul>
               <li><a href="">Главная</a></li>
               <li><a href="">Навыки</a></li>
               <li><a href="">Проекты</a></li>
               <li><a href="">Контакты</a></li>
            </ul>
         </StyledMenu>
   );
}

const StyledMenu = styled.nav`
   ul {
      display: flex;
      gap: 30px;
      justify-content: end;
      margin-right: 30px;
   }
`