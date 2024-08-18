import { StyledHeader, InfoButton } from './style';
import Text from '../../../../helpers/constants/texts.json';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <StyledHeader>
      <Link href={'../../info'}>
        <Button type='outlined'>{Text.button.goodToKnow}</Button>
      </Link>
      <Link href={'./'}>
        <Icon imageSrc='/logowedding.svg' size={40} />
      </Link>
      <Link href={'../../rsvp'}>
        <Button type='solid'>{Text.button.rsvp}</Button>
      </Link>
    </StyledHeader>
  );
};

export default Header;
