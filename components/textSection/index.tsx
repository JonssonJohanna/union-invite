import React from 'react';
import { StyledContainer } from './style';
import text from '../../helpers/constants/texts.json';
import Icon from '../Icon';
import Button from '../Button';
import Link from 'next/link';

const TextSection: React.FC = () => {
  return (
    <StyledContainer>
      <Icon imageSrc='/comeselebrate.svg' size={400}></Icon>
      <Link href={'../../rsvp'}>
        <Button type='solid'>{text.button['seeYouThere?']}</Button>
      </Link>
    </StyledContainer>
  );
};

export default TextSection;
