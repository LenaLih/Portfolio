import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../style/Theme';

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle title={'Contact'} />
        <StyledForm>
          <Field placeholder={'Name'} />
          <Field placeholder={'Имя'} />
          <Field as={'textarea'} placeholder={'Message'} />
          <Button title={'Отправить'} />
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.fond};

  &::placeholder {
    color: ${theme.color.placeholder};
    text-transform: capitalize;
  }
`;
