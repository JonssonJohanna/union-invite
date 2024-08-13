import styled, { css } from 'styled-components'
import {
  typography,
  colors,
  spacing,
  opacity,
} from '@styles/utilities/variables'

const solidButton = css`
  color: ${colors.white};
  padding: ${spacing._12} ${spacing._24};
  background: ${colors.merigold};
  text-transform: none;
  font-weight: 500;

  &:hover {
    color: ${colors.white};
    background: ${colors.grey20};
    border: 1px solid ${colors.grey20};
    transform: translateY(-3px) translateX(-3px);
    box-shadow: 4px 4px 0 ${colors.grey70};
  }
`

const outlinedButton = css`
  padding: ${({ padding }) => padding || `${spacing._08} ${spacing._12}`};
  border-radius: 0;
  border: 1px solid ${colors.grey20};
  background: ${colors.transparent};
  text-transform: none;
  font-weight: ${({ weight }) =>
    weight ? typography.weight[weight] : typography.weight.normal};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.merigold};
    border: 1px solid ${colors.transparent};
    transform: translateY(-4px) translateX(-4px);
    box-shadow: 4px 4px 0 ${colors.grey65};
  }
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || `${spacing._12} 0`};
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  border-radius: 2px;
  border: 1px solid ${colors.merigold};
  color: ${colors.grey20};
  font-weight: ${({ weight }) =>
    weight ? typography.weight[weight] : typography.weight.normal};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing
      ? typography.letterSpacing[letterSpacing]
      : typography.letterSpacing._1};
  text-transform: ${({ transform }) =>
    transform
      ? typography.transform[transform]
      : typography.transform.capitalize};
  font-size: ${({ size }) =>
    size ? typography.sizes[size] : typography.sizes._14};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  position: relative;

  ${({ type }) => (type === 'solid' ? solidButton : null)}
  ${({ type }) => (type === 'outlined' ? outlinedButton : null)}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: ${opacity._5};
      pointer-events: none;
    `}

  ${({ cancel }) =>
    cancel &&
    css`
      border: 1px solid ${colors.grey20};
      opacity: ${opacity._8};

      &:hover {
        background-color: ${colors.grey20};
        color: ${colors.grey30};
        opacity: ${opacity._10};
      }
    `}
`

export default StyledButton
