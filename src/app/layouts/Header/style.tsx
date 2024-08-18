import styled, { css } from 'styled-components';
import { colors, mq, typography } from '../../../../styles/utilities/variables';
import Button from '../../../../components/Button';

const StyledHeader = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${colors.forest};

  @media ${mq.mobileDown} {
    flex-direction: column;
  }
`;
const NavContainer = styled.div`
  width: 940vw;
  max-width: 940px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
`;
const InfoButton = styled.button`
  font-family: ${typography.secondaryFont};
  font-weight: 400;
  color: ${colors.ocean};
  @media ${mq.tabletPortraitDown} {
    position: initial;
    width: initial;
    margin: 0 auto 0 0;
  }
`;
export { StyledHeader, NavContainer, InfoButton };
