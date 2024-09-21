import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Button } from "../../../components/button/Button";

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle title={"Контакты"} />
      <StyledForm>
        <Field placeholder={"Имя"}/>
        <Field placeholder={"Имя"}/>
        <Field as={"textarea"} placeholder={"Сообщение"}/>
        <Button title={"Отправить"}/>
      </StyledForm>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  min-height: 40vh;

`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const Field = styled.input``;
