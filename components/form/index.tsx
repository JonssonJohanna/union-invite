import { Section } from '@/app/rsvp/style';
import {
  CheckboxLabel,
  CustomCheckbox,
  Input,
  Label,
  Select,
  SubmitButton,
  Text,
} from './style';
import text from '../../helpers/constants/texts.json';
const Form = () => {
  return (
    <>
      <CheckboxLabel>
        <CustomCheckbox />
        {text.rsvp.illBeThere}
      </CheckboxLabel>
      <CheckboxLabel>
        <CustomCheckbox />
        {text.rsvp.sorryMakeIt}
      </CheckboxLabel>
      <Label>
        {text.rsvp.yourName}
        <Input placeholder='Enter your name here' type='text' />
      </Label>
      <Text>{text.rsvp.skipQuestions}</Text>
      <Label>
        {text.rsvp.preference}
        <Select>
          <option value='option1'>Select from the dropdown</option>
          <option value='option2'>Option 2</option>
        </Select>
      </Label>
      <Section />
      <Label>
        {text.rsvp.diet}
        <Input placeholder='Enter your requirements here' type='text' />
      </Label>
      <Label>
        {text.rsvp.anythingElse}
        <Input placeholder='Enter your message here' type='text' />
      </Label>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </>
  );
};
export default Form;
