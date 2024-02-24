import styled from '@emotion/styled';
import { ComponentType, SVGProps } from 'react';

import { filterCssProps } from '~/utils/css';

import { BaseIconProps } from './types';

const Svg = styled.svg(({ theme, ...props }) => ({
  height: '100%',
  width: '100%',
  ...filterCssProps(props, theme),
})) as ComponentType<
  Omit<BaseIconProps, 'title' | 'titleId'> &
    Pick<SVGProps<SVGSVGElement>, 'role' | 'xmlns'>
>;

function Icon({
  viewBox = '0 0 24 24',
  title,
  titleId,
  className,
  children,
  ...rest
}: BaseIconProps) {
  return (
    <Svg
      aria-labelledby={titleId}
      className={className}
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      {children}
    </Svg>
  );
}

export default Icon;
