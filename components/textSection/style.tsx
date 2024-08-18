'use client';

import styled from 'styled-components';
import { colors } from '../../styles/utilities/variables';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 940vw;
  background-color: ${colors.forest};
  color: ${colors.ocean};
  padding-bottom: 65px;
  padding-left: 100px;
  padding-right: 100px;
  height: 100vh;
  margin-top: auto;
  margin-bottom: auto;
`;

export { StyledContainer };
