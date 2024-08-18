import { StyledHeader, NavContainer } from './style';
import Text from '../../../../helpers/constants/texts.json';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <StyledHeader>
      <NavContainer>
        <Link href={'../../info'}>
          <Button type='transparent'>{Text.button.goodToKnow}</Button>
        </Link>
        <Link href={'./'}>
          <Icon imageSrc='/logowedding.svg' size={50} />
        </Link>
        <Link href={'../../rsvp'}>
          <Button type='solid'>{Text.button.rsvp}</Button>
        </Link>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
