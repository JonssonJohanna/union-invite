'use client';
import styled, { css } from 'styled-components';
import { colors, spacing, typography } from '../../styles/utilities/variables';

const solidButton = css`
  color: ${colors.black};
  padding: ${spacing._12} ${spacing._28};
  background: ${colors.ocean};
  text-transform: uppercase;
  font-family: ${typography.primaryFont};
  border-radius: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: ${typography.sizes._08};
  height: 20px;

  &:hover {
    color: ${colors.ocean};
    background: ${colors.forest};
    border: 1px solid ${colors.ocean};
  }
`;

const outlinedButton = css`
  color: ${colors.forest};
  padding: ${spacing._12} ${spacing._28};
  background: ${colors.ocean};
  border: 1px solid ${colors.forest};
  text-transform: uppercase;
  font-family: ${typography.primaryFont};
  border-radius: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: ${typography.sizes._08};
  height: 20px;

  &:hover {
    color: ${colors.ocean};
    background-color: ${colors.forest};
  }
`;
const transparent = css`
  border-radius: 0;
  background: ${colors.transparent};
  border: none;
  color: ${colors.ocean};
  text-transform: none;
  cursor: pointer;
  font-family: ${typography.secondaryFont};
  font-size: ${typography.sizes._09};
  font-weight: 400;

  &:hover {
    color: ${colors.ocean};
    font-style: italic;
    border: 1px solid ${colors.transparent};
  }
`;

const StyledButton = styled.button<{
  type?: 'outlined' | 'solid' | 'transparent';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  position: relative;

  ${({ type }) =>
    type === 'solid'
      ? solidButton
      : type === 'outlined'
      ? outlinedButton
      : type === 'transparent'
      ? transparent
      : ''}
`;

export default StyledButton;
