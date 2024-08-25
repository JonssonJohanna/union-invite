'use client';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../styles/utilities/variables';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:focus {
    font-family: ${typography.primaryFont};
  }
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.forest};
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;

  &:checked {
    background-color: ${colors.forest};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px ${colors.forest};
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  font-family: ${typography.secondaryFont};
`;

const Input = styled.input`
  padding: 5px 0;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${colors.forest};
  color: ${colors.forest};
  font-size: ${typography.sizes._09};
  transition: border-bottom 0.1s ease;
  width: 700px;
  font-family: ${typography.primaryFont};

  &::placeholder {
    color: ${colors.forest};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;

const Select = styled.select`
  background: transparent;
  border: none;
  color: ${colors.forest};
`;

const SubmitButton = styled.button`
  color: ${colors.ocean};
  padding: ${spacing._12} ${spacing._28};
  background: ${colors.forest};
  text-transform: uppercase;
  font-family: ${typography.primaryFont};
  border-radius: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: ${typography.sizes._08};
  height: 20px;
  width: 700px;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${colors.forest};
    background: ${colors.ocean};
    border: 1px solid ${colors.forest};
  }
`;
const Text = styled.div`
  font-family: ${typography.primaryFont};
  font-style: normal;
`;
export {
  FormContainer,
  CheckboxLabel,
  CustomCheckbox,
  Label,
  Input,
  Select,
  SubmitButton,
  Text,
};
