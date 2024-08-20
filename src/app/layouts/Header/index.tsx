import { useContext, useEffect, useState } from 'react';
import {
  StyledHeader,
  NavContainer,
  DynamicHeader,
  DynamicInfoButton,
} from './style';
import Text from '../../../../helpers/constants/texts.json';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors } from '../../../../styles/utilities/variables';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <DynamicHeader isHomePage={isHomePage}>
      <NavContainer>
        <Link href={'../../info'}>
          <DynamicInfoButton isHomePage={isHomePage}>
            {Text.button.goodToKnow}
          </DynamicInfoButton>
        </Link>
        <Link href={'./'}>
          <Icon imageSrc='/logowedding.svg' size={50} />
        </Link>
        <Link href={'../../rsvp'}>
          <Button type='solid'>{Text.button.rsvp}</Button>
        </Link>
      </NavContainer>
    </DynamicHeader>
  );
};

export default Header;
