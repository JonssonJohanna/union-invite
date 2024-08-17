'use client';
import styled from 'styled-components';
import { colors, mq } from '../../../../styles/utilities/variables';

const StyledHeader = styled.div`
  padding: 27px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${colors.forest};

  @media ${mq.mobileDown} {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media ${mq.tabletPortraitDown} {
    position: initial;
    width: initial;
    margin: 0 auto 0 0;
  }
`;
export default StyledHeader;
