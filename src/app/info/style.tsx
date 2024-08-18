'use client';

import styled from 'styled-components';
import { typography, colors } from '../../../styles/utilities/variables';
const SectionContainer = styled.div`
  background-color: ${colors.ocean};
  color: ${colors.forest};
`;
const SectionContent = styled.div`
  width: 940vw;
  max-width: 940px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`;

const Section = styled.section`
  margin: 0;
`;

const Title = styled.h2`
  font-size: ${typography.sizes._18};
  margin-bottom: 10px;
  font-family: ${typography.secondaryFont};
`;

const Subtitle = styled.h3`
  font-size: 2 ${typography.sizes._12};
  margin-top: 15px;
  font-weight: 400;
  font-family: ${typography.secondaryFont};
`;

const Paragraph = styled.p`
  font-size: ${typography.sizes._12};
  margin: 10px 0;
  font-family: ${typography.primaryFont};
`;

const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

export {
  SectionContainer,
  SectionContent,
  Section,
  Title,
  Subtitle,
  Paragraph,
  List,
  ListItem,
};
