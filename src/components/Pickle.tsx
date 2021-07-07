import styled from '@emotion/styled';
import { Theme } from '~/constants/theme';
import FlexBox from './box/FlexBox';

type PickleProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: keyof Theme['colors'];
  origin?: 'right' | 'left';
};

type PicklePieceProps = Pick<PickleProps, 'color' | 'origin'>;

const PickleWrapper = styled.div<Pick<PickleProps, 'origin'>>`
  display: grid;
  grid-template-columns: ${({ origin }) =>
    origin === 'left' ? '80% 20%' : '20% 80%'};
`;

const PickleCap = styled.div<PicklePieceProps>(
  {
    borderStyle: 'solid',
  },
  ({ theme, origin, color }) => ({
    borderWidth: theme.border.borderWidth[3],
    backgroundColor: color ? theme.colors[color] : 'transparent',
    borderColor: color ? theme.colors[color] : theme.colors.text,
    borderRadius: '0 1000px 1000px 0',
    borderLeftWidth: 0,
    ...(origin === 'right' && {
      borderRadius: '1000px 0 0 1000px',
      borderLeftWidth: theme.border.borderWidth[3],
      borderRightWidth: 0,
    }),
  })
);

const PickleBody = styled(FlexBox)<PicklePieceProps>`
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : 'transparent'};
  border-width: ${({ theme }) => `${theme.border.borderWidth[3]} 0`};
  border-style: solid;
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
`;

const Pickle: React.FC<PickleProps> = ({
  color,
  className,
  children,
  origin = 'left',
}) => (
  <PickleWrapper className={className} origin={origin}>
    {origin === 'right' && <PickleCap color={color} origin={origin} />}
    <PickleBody alignItems="center" color={color} origin={origin}>
      {children}
    </PickleBody>
    {origin === 'left' && <PickleCap color={color} origin={origin} />}
  </PickleWrapper>
);

export default Pickle;
