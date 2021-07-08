import styled from '@emotion/styled';

import { Theme } from '~/constants/theme';

import FlexBox from './box/FlexBox';

type PickleProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: keyof Theme['colors'];
  origin?: 'right' | 'left';
};

const PickleBody = styled(FlexBox)<Pick<PickleProps, 'origin'>>(
  ({ origin }) => ({
    ...(origin === 'left' && {
      borderLeftWidth: 0,
      borderRadius: '0 1000px 1000px 0',
    }),
    ...(origin === 'right' && {
      borderRightWidth: 0,
      borderRadius: '1000px 0 0 1000px',
    }),
  })
);

const Pickle: React.FC<PickleProps> = ({
  color,
  className,
  children,
  origin = 'left',
}) => (
  <PickleBody
    alignItems="center"
    backgroundColor={color}
    borderColor={color || 'text'}
    borderStyle="solid"
    borderWidth={3}
    className={className}
    origin={origin}
  >
    {children}
  </PickleBody>
);

export default Pickle;
