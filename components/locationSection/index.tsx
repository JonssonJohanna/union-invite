import React from 'react';
import {
  LocationContainer,
  LocationHeader,
  LocationText,
  TextWrapper,
} from './style';
import Button from '../Button';
import Icon from '../Icon';

const LocationSection: React.FC = () => {
  return (
    <>
      <LocationContainer>
        <TextWrapper>
          <LocationHeader>Location</LocationHeader>
          <LocationText>
            Updown Farm, Updown Road, Betteshanger, Deal, CT14 0EF
          </LocationText>
          <Button type='outlined'>Directions</Button>
        </TextWrapper>
        <Icon imageSrc='updown.png' size={500}></Icon>
      </LocationContainer>
    </>
  );
};

export default LocationSection;
