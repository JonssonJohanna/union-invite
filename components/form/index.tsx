/* import React, { useState } from 'react'; */
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
  /*  const [formData, setFormData] = useState({
    yourName: '',
    preference: '',
    diet: '',
    anythingElse: '',
    illBeThere: false,
    sorryMakeIt: false,
  }); */
  /*  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }; */
  /*   const handleSubmit = (e: any) => {
    e.preventDefault();

    const mailtoLink = `mailto:johanna_jonson@hotmail.com?subject=RSVP&body=
      Name: ${formData.yourName}%0D%0A
      Will Attend: ${formData.illBeThere ? 'Yes' : 'No'}%0D%0A
      Sorry, Can't Make It: ${formData.sorryMakeIt ? 'Yes' : 'No'}%0D%0A
      Preference: ${formData.preference}%0D%0A
      Dietary Requirements: ${formData.diet}%0D%0A
      Additional Message: ${formData.anythingElse}
    `;

    window.location.href = mailtoLink;
  }; */
  return (
    <>
      {/*  <form onSubmit={handleSubmit}> */}
      <CheckboxLabel>
        <CustomCheckbox name='illBeThere' />
        {text.rsvp.illBeThere}
      </CheckboxLabel>
      <CheckboxLabel>
        <CustomCheckbox name='sorryMakeIt' />
        {text.rsvp.sorryMakeIt}
      </CheckboxLabel>
      <Label>
        {text.rsvp.yourName}
        <Input name='yourName' placeholder='Enter your name here' type='text' />
      </Label>
      <Text>{text.rsvp.skipQuestions}</Text>
      <Label>
        {text.rsvp.preference}
        <Select name='preference'>
          <option value=''>Select from the dropdown</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </Select>
      </Label>
      <Section />
      <Label>
        {text.rsvp.diet}
        <Input
          name='diet'
          placeholder='Enter your requirements here'
          type='text'
        />
      </Label>
      <Label>
        {text.rsvp.anythingElse}
        <Input
          name='anythingElse'
          placeholder='Enter your message here'
          type='text'
        />
      </Label>
      <SubmitButton type='submit'>Submit</SubmitButton>
      {/*     </form> */}
    </>
  );
};

export default Form;
