import styled from 'styled-components';
import { Decor } from '../../components/decor/Decor';
import { FlexContainer } from '../../components/FlexContainer';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../style/Theme';
import decor from '../../assets/Decors/arrows(2).png';
import { Container } from '../../components/Container';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
      <Decor src={decor} top={'-230px'} left={'-50px'}/>
      <FlexContainer direction={'column'} align={'center'}>
        <FooterList>
          <FooterItem>
            <FooterLink href="#">
              <Icon
                height={'35px'}
                width={'35px'}
                viewBox={'0 0 35 35'}
                iconId={'telegram'}
              />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">
              <Icon
                height={'35px'}
                width={'35px'}
                viewBox={'0 0 35 35'}
                iconId={'linkedin'}
              />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">
              <Icon
                height={'35px'}
                width={'35px'}
                viewBox={'0 0 35 35'}
                iconId={'email'}
              />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">
              <Icon
                height={'35px'}
                width={'35px'}
                viewBox={'0 0 35 35'}
                iconId={'whatsapp'}
              />
            </FooterLink>
          </FooterItem>
        </FooterList>
      </FlexContainer>
      </Container>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  background-color: ${theme.color.primaryBg};
  padding: 20px 0 40px;
`;
const FooterList = styled.ul`
  display: flex;
  gap: 50px;
`;
const FooterItem = styled.li``;
const FooterLink = styled.a``;
