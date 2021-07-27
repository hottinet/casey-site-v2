import styled from '@emotion/styled';

import Icon from './Icon';
import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'textSecondary', theme }) => theme.colors[color]};
`;

const Arrow: React.FC<IconProps> = ({ className, color, title, titleId }) => (
  <Icon
    className={className}
    title={title}
    titleId={titleId}
    viewBox="0 0 33 29"
  >
    <Path
      clipRule="evenodd"
      color={color}
      d="M0 14.318a2.5 2.5 0 012.5-2.5h24.621a2.5 2.5 0 110 5H2.5a2.5 2.5 0 01-2.5-2.5z"
      fillRule="evenodd"
    />
    <Path
      clipRule="evenodd"
      color={color}
      d="M15.997.732a2.5 2.5 0 013.536 0l13.586 13.586-13.586 13.586a2.5 2.5 0 01-3.536-3.535l10.05-10.05-10.05-10.051a2.5 2.5 0 010-3.536z"
      fillRule="evenodd"
    />
  </Icon>
);

export default Arrow;
