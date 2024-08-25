import text from '../../../helpers/constants/texts.json';
import {
  Paragraph,
  SectionContainer,
  SectionContent,
  Subtitle,
  Title,
} from '../info/style';
export default function AreaPage() {
  const { placesToVisit, thingsToDo } = text.area;
  return (
    <>
      <SectionContainer>
        <SectionContent>
          <Title>{text.button.aBitAboutTheArea}</Title>
          <div>{text.area.longerText}</div>
          <div>
            {thingsToDo.map((todo) => (
              <div>
                <Subtitle>{todo.name}</Subtitle>
                <Paragraph>{todo.description}</Paragraph>
              </div>
            ))}
          </div>
          <div>
            {placesToVisit.map((place) => (
              <div>
                <Subtitle>{place.name}</Subtitle>
                <Paragraph>{place.description}</Paragraph>
              </div>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </>
  );
}
