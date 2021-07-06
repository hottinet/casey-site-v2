import styled from '@emotion/styled';
import { Theme } from '~/constants/theme';
import FlexBox from './FlexBox';

type PickleProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: keyof Theme['colors'];
};

type ColorProps = Pick<PickleProps, 'color'>;

const PickleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 90%;
  ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 6fr 1fr;
  }
`;

const PickleCap = styled.div<ColorProps>`
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : 'transparent'};
  border-radius: 0 1000px 1000px 0;
  border-style: solid;
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
  border-width: ${({ theme }) => theme.border.borderWidth[3]};
  border-left-width: 0;
`;

const PickleBody = styled(FlexBox)<ColorProps>`
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : 'transparent'};
  border-width: ${({ theme }) => `${theme.border.borderWidth[3]} 0`};
  border-style: solid;
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
`;

const Pickle: React.FC<PickleProps> = ({ color, className, children }) => (
  <PickleWrapper className={className}>
    <PickleBody alignItems="center" color={color} justifyContent="space-evenly">
      {children}
    </PickleBody>
    <PickleCap color={color} />
  </PickleWrapper>
);

export default Pickle;
