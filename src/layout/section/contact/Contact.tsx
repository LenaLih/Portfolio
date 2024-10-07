import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../style/Theme';
import { Decor } from '../../../components/decor/Decor';
import decor from '../../../assets/Decors/arrows(2).png';

export const Contact = () => {
  return (
    <StyledContact id={"contact"}>
      <Container>
        <SectionTitle title={'{ Contact }'} 
        subtitle={'If you have any questions'}/>
        <StyledForm>
          <Field placeholder={'Name'} />
          <Field placeholder={'Email'} />
          <Field as={'textarea'} placeholder={'Message'} />
          <Button title={'Send'} />
        </StyledForm>
        {/* <Decor src={decor} bottom={'0'} right={'100px'}/> */}
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
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
`;

const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  border-radius: 15px;
  font-family: ${theme.font.fontText};
  font-size: 17px;
  font-weight: 400;
  color: ${theme.color.primaryBg};

  &::placeholder {
    text-transform: capitalize;
  }
`;
