import {
  NavContainer,
  DynamicHeader,
  DynamicInfoButton,
  DynamicIcon,
  DynamicButton,
} from './style';
import Text from '../../../../helpers/constants/texts.json';
import Button from '../../../../components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
          <DynamicIcon isHomePage={isHomePage}></DynamicIcon>
        </Link>
        <Link href={'../../rsvp'}>
          <DynamicButton isHomePage={isHomePage}>
            {Text.button.rsvp}
          </DynamicButton>
        </Link>
      </NavContainer>
    </DynamicHeader>
  );
};

export default Header;
