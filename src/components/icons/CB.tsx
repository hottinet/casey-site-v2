import styled from '@emotion/styled';

import Icon from './Icon';
import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'text', theme }) => theme.colors[color]};
`;

const CB: React.FC<IconProps> = ({ className, color, title, titleId }) => (
  <Icon
    className={className}
    title={title}
    titleId={titleId}
    viewBox="0 0 66 34"
  >
    <Path
      color={color}
      d="M26.1501 1.5C25.9001 2.5 25.1 2.9 24.35 2.9C22.4 2.9 19.85 0.75 15.1 0.75C6.55005 0.75 0.800049 5.35 0.800049 17.15C0.800049 30.6 8.20005 33.75 16.2 33.75C26.6001 33.75 29.1001 28.3 29.1001 20.45H26.05C26.1501 27.4 23.6501 29.9 18.5501 29.9C13.65 29.9 11.3 26.15 11.3 16.95C11.3 5.85 13.6001 4.05 17.3001 4.05C21.65 4.05 24.3001 9.5 25.9501 14.65H28.9501L29.2001 1.5H26.1501Z"
    />
    <Path
      color={color}
      d="M52.2555 33C62.0555 33 65.3555 31.15 65.3555 24.7C65.3555 18.85 61.8055 17.85 55.6055 17.7V16.05C61.4055 15.9 64.6555 14.95 64.6555 9.25C64.6555 3.35 61.5555 1.5 51.8555 1.5H32.6055V4.5C36.5055 4.5 36.4055 4.85 36.4055 11V23.5C36.4055 29.65 36.5055 30 32.6055 30V33H52.2555ZM48.1055 18.7C53.0555 18.7 55.3555 19.5 55.3555 24.25C55.3555 28.85 52.7555 30 47.5055 30H46.4055V18.7H48.1055ZM47.7555 4.5C53.0555 4.5 54.7555 5.45 54.7555 10.25C54.7555 14.7 53.1555 15.8 48.0055 15.8H46.4055V4.5H47.7555Z"
    />
  </Icon>
);

export default CB;
