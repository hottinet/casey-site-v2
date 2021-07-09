import styled from '@emotion/styled';

import FlexBox from '../box/FlexBox';
import { PickleProps } from './types';

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
