import styled from 'styled-components';
import { FlexContainer } from '../../components/FlexContainer';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../style/Theme';
import { Container } from '../../components/Container';
import decorImage from '../../assets/decors/arrows(2).png';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
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
  padding: 100px 0 60px;
  position: relative;

  ::before {
    content: "";
    background-image: url(${decorImage});
    background-position:  50% 45%;
    position: absolute;
    width: 400px;
    height: 250px;
    top: 0px;
    left: 0px;
  }
`;
const FooterList = styled.ul`
  display: flex;
  gap: 50px;
`;
const FooterItem = styled.li``;
const FooterLink = styled.a`
z-index: 99;
`;
