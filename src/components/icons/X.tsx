import styled from '@emotion/styled';

import Icon from './Icon';
import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'textSecondary', theme }) => theme.colors[color]};
`;

export function X({ className, color, title, titleId }: IconProps) {
  return (
    <Icon
      className={className}
      title={title}
      titleId={titleId}
      viewBox="0 0 24 24"
    >
      <Path
        color={color}
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
      />
    </Icon>
  );
}
