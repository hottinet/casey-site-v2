import styled from '@emotion/styled';

import { Color } from '~/typings/theme';

import { FlexBox } from '../box/FlexBox';

type PickleProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: Color;
  origin?: 'right' | 'left';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const PickleBody = styled(FlexBox)<Pick<PickleProps, 'origin'>>(
  ({ origin, theme }) => ({
    ...(origin === 'left' && {
      borderLeftWidth: 0,
      borderRadius: '0 100px 100px 0',
      [theme.breakpoints.sm]: {
        borderRadius: '0 250px 250px 0',
      },
      [theme.breakpoints.md]: {
        borderRadius: '0 1000px 1000px 0',
      },
    }),
    ...(origin === 'right' && {
      borderRightWidth: 0,
      borderRadius: '50px 0 0 50px',
      [theme.breakpoints.sm]: {
        borderRadius: '1000px 0 0 1000px',
      },
    }),
  })
);

const Pickle: React.FC<PickleProps> = ({
  color,
  className,
  children,
  origin = 'left',
  onMouseEnter,
  onMouseLeave,
}) => (
  <PickleBody
    alignItems="center"
    backgroundColor={color}
    borderColor={color || 'text'}
    borderStyle="solid"
    borderWidth={3}
    className={className}
    origin={origin}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </PickleBody>
);

export default Pickle;
