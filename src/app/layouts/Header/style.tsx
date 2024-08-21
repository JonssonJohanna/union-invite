import styled from 'styled-components';
import {
  colors,
  mq,
  spacing,
  typography,
} from '../../../../styles/utilities/variables';
import iHeader from './interface';
import homeIcon from '../../../../public/logowedding.svg';
import forestIcon from '../../../../public/weddinglogoforest.svg';
import iButton from '@/app/interface';
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

const DynamicIcon = styled.div<iHeader>`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: ${({ isHomePage }) =>
    isHomePage ? `url(${homeIcon.src})` : `url(${forestIcon.src})`};
`;
const DynamicButton = styled(Button)<iHeader>`
  padding: ${spacing._12} ${spacing._28};
  background: ${colors.ocean};
  text-transform: uppercase;
  font-family: ${typography.primaryFont};
  border-radius: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: ${typography.sizes._08};
  height: 20px;
  color: ${({ isHomePage }) =>
    isHomePage ? `${colors.forest}` : `${colors.ocean}`};
  background-color: ${({ isHomePage }) =>
    isHomePage ? `${colors.ocean}` : `${colors.forest}`};

  &:hover {
    color: ${({ isHomePage }) =>
      isHomePage ? `${colors.ocean}` : `${colors.forest}`};
    background: ${({ isHomePage }) =>
      isHomePage ? `${colors.forest}` : `${colors.ocean}`};
    border: ${({ isHomePage }) =>
      isHomePage ? `${colors.ocean} 1px solid` : `${colors.forest} 1px solid`};
  }
`;

export {
  StyledHeader,
  DynamicHeader,
  NavContainer,
  InfoButton,
  DynamicInfoButton,
  DynamicIcon,
  DynamicButton,
};
