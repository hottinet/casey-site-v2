import { AllowedCommonCssProps, AllowedCustomCssProps } from '~/constants/css';
import { Color } from '~/typings/theme';

export type BaseIconProps = {
  className?: string;
  viewBox?: string;
  title: string;
  titleId: string;
  children: React.ReactNode;
} & AllowedCommonCssProps &
  AllowedCustomCssProps;

export type IconProps = Omit<BaseIconProps, 'viewBox' | 'children'> & {
  color?: Color;
};
