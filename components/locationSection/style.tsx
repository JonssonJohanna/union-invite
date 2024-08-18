'use client';

import styled from 'styled-components';
import { colors, typography } from '../../styles/utilities/variables';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.ocean};
  color: ${colors.forest};
  padding: 80px 280px;
  height: 700px;
  width: auto;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 201px;
`;
const LocationHeader = styled.div`
  font-size: ${typography.sizes._18};
  font-family: ${typography.secondaryFont};
`;
const LocationText = styled.div`
  font-family: 'DM Sans';
  font-size: ${typography.sizes._10};
  margin-bottom: 24px;
`;

export { LocationContainer, LocationHeader, LocationText, TextWrapper };
