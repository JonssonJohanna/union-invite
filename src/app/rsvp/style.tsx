'use client';
import styled from 'styled-components';
import { colors, typography } from '../../../styles/utilities/variables';
const SectionContainer = styled.div`
  background-color: ${colors.ocean};
  color: ${colors.forest};
  display: flex;
  justify-content: center;
  padding: 5%;
`;
const SectionContent = styled.div`
  width: 700px;
  max-width: 940px;
  display: flex;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* height: auto;
  padding-left: 10%;
  padding-right: 10%; */
`;
const Section = styled.section`
  border-bottom: 2px solid ${colors.forest};
  width: 100%;
`;

const Title = styled.h2`
  font-size: ${typography.sizes._16};
  margin-bottom: 10px;
  font-family: ${typography.secondaryFont};
`;
export { SectionContainer, SectionContent, Section, Title };
