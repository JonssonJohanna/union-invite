import styled from 'styled-components';
import { colors, mq, typography } from '../../../../styles/utilities/variables';
import iHeader from './interface';

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
const DynamicHeader = styled(StyledHeader)<iHeader>`
  background-color: ${({ isHomePage }) =>
    isHomePage ? `${colors.forest}` : `${colors.ocean}`};
  color: ${({ isHomePage }) =>
    isHomePage ? `${colors.ocean}` : `${colors.forest}`};
`;

const NavContainer = styled.div`
  width: 940vw;
  max-width: 940px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;
const InfoButton = styled.button`
  border-radius: 0;
  background: ${colors.transparent};
  border: none;
  text-transform: none;
  cursor: pointer;
  font-family: ${typography.secondaryFont};
  font-size: ${typography.sizes._09};
  font-weight: 400;

  &:hover {
    font-style: italic;
  }
`;
const DynamicInfoButton = styled(InfoButton)<iHeader>`
  color: ${({ isHomePage }) =>
    isHomePage ? `${colors.ocean}` : `${colors.forest}`};
`;

export {
  StyledHeader,
  DynamicHeader,
  NavContainer,
  InfoButton,
  DynamicInfoButton,
};
