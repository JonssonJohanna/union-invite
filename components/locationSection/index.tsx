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
  const locationOnClick = () => {
    const location =
      'Updown Farmhouse, Updown Rd, Betteshanger, Deal CT14 0EF, Storbritannien';
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location}`;
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <>
      <LocationContainer>
        <TextWrapper>
          <LocationHeader>Location</LocationHeader>
          <LocationText>
            Updown Farm, Updown Road, Betteshanger, Deal, CT14 0EF
          </LocationText>
          <Button type='outlined' onClick={locationOnClick}>
            Directions
          </Button>
        </TextWrapper>
        <Icon imageSrc='updown.png' size={500}></Icon>
      </LocationContainer>
    </>
  );
};

export default LocationSection;
