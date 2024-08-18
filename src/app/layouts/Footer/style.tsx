'use client';

import styled from 'styled-components';
import { colors, typography } from '../../../../styles/utilities/variables';

const StyledFooter = styled.div`
  padding: 40px 30px 30px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colors.sand};
`;
const StyledContainer = styled.div`
  width: 940vw;
  max-width: 940px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
`;

const StyledFooterText = styled.h5`
  font-family: ${typography.secondaryFont};
  color: ${colors.fire};
  font-weight: 400;
  font-size: ${typography.sizes._08};
`;
const LinkContainer = styled.div`
  grid-column-gap: 20px;
  display: flex;
`;

export { StyledFooter, StyledFooterText, StyledContainer, LinkContainer };
