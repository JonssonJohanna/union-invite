import React from 'react';
import {
  StyledFooter,
  StyledFooterText,
  StyledContainer,
  LinkContainer,
} from './style';
import Icon from '../../../../components/Icon';
import Link from 'next/link';
import text from '../../../../helpers/constants/texts.json';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Icon imageSrc='/orangeicon.svg' size={60} />
        <LinkContainer>
          <Link href={'../../.'}>
            <StyledFooterText>{text.button.homePage}</StyledFooterText>
          </Link>
          <Link href={'../../rsvp'}>
            <StyledFooterText>{text.button.rsvp}</StyledFooterText>
          </Link>
          <Link href={'../../info'}>
            <StyledFooterText>{text.button.goodToKnow}</StyledFooterText>
          </Link>
          <Link href={'../../area'}>
            <StyledFooterText>{text.button.aBitAboutTheArea}</StyledFooterText>
          </Link>
        </LinkContainer>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
