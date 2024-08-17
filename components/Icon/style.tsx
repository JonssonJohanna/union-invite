'use client';
import styled, { css } from 'styled-components';
import iIcon from './interface';
import { colors } from '../../styles/utilities/variables';

const StyledIcon = styled.div<iIcon>`
  position: ${({ position }) => (position ? position : 'relative')};
  display: flex;
  cursor: ${({ handleClick }) => (handleClick ? 'pointer' : 'default')};
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  color: ${({ color }) => color};
`;

export default StyledIcon;
