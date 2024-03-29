import styled from '@emotion/styled';

import Icon from './Icon';
import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'textSecondary', theme }) => theme.colors[color]};
`;

export function Hamburger({ className, color, title, titleId }: IconProps) {
  return (
    <Icon
      className={className}
      title={title}
      titleId={titleId}
      viewBox="0 0 24 24"
    >
      <Path color={color} d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
    </Icon>
  );
}
