'use client';

import styled from 'styled-components';
import { colors } from '../../../../styles/utilities/variables';

const StyledFooter = styled.div`
  padding: 27px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.sand};
  color: ${colors.fire};
`;

const StyledFooterText = styled.h5`
  font-family: 'new-spirit';
  /* font-family: 'DM Sans', sans-serif; */
  font-weight: 600;
`;

export { StyledFooter, StyledFooterText };
