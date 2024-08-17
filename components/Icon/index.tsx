import React from 'react';
import StyledIcon from './style';
import iIcon from './interface';

const Icon = (props: iIcon) => {
  const {
    icon,
    imageSrc,
    handleClick,
    className,
    size,
    active,
    text,
    position,
    marginRight,
    marginLeft,
    marginBottom,
    marginTop,
  } = props;

  return (
    <StyledIcon
      onClick={handleClick}
      className={className}
      size={size}
      position={position}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      marginTop={marginTop}
      color={props.color}
    >
      <img
        src={imageSrc}
        alt={text || 'icon'}
        style={{ width: size, height: size }}
      />
      {text && <span>{text}</span>}{' '}
    </StyledIcon>
  );
};

export default Icon;
