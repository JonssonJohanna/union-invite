import { SectionContainer, SectionContent, Title, Section } from './style';
import Icon from '../../../components/Icon';
import text from '../../../helpers/constants/texts.json';
import Form from '../../../components/form';
export default function RsvpPage() {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <Icon imageSrc='/submitrsvp.svg' size={170}></Icon>
          <Title>{text.rsvp['seeYouThere?']}</Title>
          <Form />
        </SectionContent>
      </SectionContainer>
    </>
  );
}
