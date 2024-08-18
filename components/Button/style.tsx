import styled, { css } from 'styled-components';
import { colors, spacing, typography } from '../../styles/utilities/variables';

const solidButton = css`
  color: ${colors.black};
  padding: ${spacing._12} ${spacing._28};
  background: ${colors.ocean};
  text-transform: uppercase;
  font-family: 'DM Sans';
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
  border-radius: 0;
  background: ${colors.transparent};
  border: none;
  color: ${colors.ocean};
  text-transform: none;
  cursor: pointer;
  font-family: 'new-spirit';
  font-size: ${typography.sizes._09};

  /* &:hover {
    color: ${colors.white};
    background-color: ${colors.fire};
    border: 1px solid ${colors.transparent};
    transform: translateY(-4px) translateX(-4px);
    box-shadow: 4px 4px 0 ${colors.grey65};
  } */
`;

const StyledButton = styled.button<{ type?: 'outlined' | 'solid' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  position: relative;

  ${({ type }) =>
    type === 'solid' ? solidButton : type === 'outlined' ? outlinedButton : ''}
`;

export default StyledButton;
