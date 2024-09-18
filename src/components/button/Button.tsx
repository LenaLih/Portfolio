import styled from "styled-components";

type ButtonPropsType = {
   title?: string
}

export const Button = (props: ButtonPropsType) => {
   return (
       <StyledButton type={"submit"}>
      <Title>{props.title}</Title>
       </StyledButton>
   );
   }

   const StyledButton = styled.button`
      
   `

const Title = styled.p`
      
`