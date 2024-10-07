import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';


export const Logo = () => {
  return (
    <StyledLogo onClick={() => {scroll.scrollToTop()}}>
      <Icon
        iconId={'logo'}
        width={'67px'}
        height={'67px'}
        viewBox={'0 0 67 67'}
      />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  z-index: 99999;
`;
