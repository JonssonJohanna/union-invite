import React from 'react';
import { StyledFooter, StyledFooterText } from './style';
import Icon from '../../../../components/Icon';

const Footer = () => {
  return (
    <StyledFooter>
      <Icon imageSrc='/orangeicon.svg' size={60} />
      <StyledFooterText>Fontotnotntont</StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
