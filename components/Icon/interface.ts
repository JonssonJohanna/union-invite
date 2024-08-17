import { colors } from '../../styles/utilities/types';

export default interface iIcon {
  icon?: string;
  imageSrc?: string | undefined;
  className?: string;
  size: number;
  text?: string;
  color?: colors;
  position?: 'absolute' | 'relative' | 'unset';
  active?: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  disabled?: boolean;
  hasTransition?: boolean;
  handleClick?: () => void;
}
