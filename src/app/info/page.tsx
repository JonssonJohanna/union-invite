import {
  SectionContainer,
  SectionContent,
  Title,
  Section,
  Subtitle,
  Paragraph,
} from './style';

import text from '../../../helpers/constants/sectionText.json';
export default function InfoPage() {
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <Title>Good to know</Title>
          {text.map((section, index) => (
            <Section key={index}>
              <Subtitle>{section.subtitle}</Subtitle>
              <Paragraph dangerouslySetInnerHTML={{ __html: section.text }} />
            </Section>
          ))}
        </SectionContent>
      </SectionContainer>
    </>
  );
}
