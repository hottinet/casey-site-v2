import styled from '@emotion/styled';

import { FlexBox, FlexBoxProps } from './box/FlexBox';
import { Text } from './typography/Text';

type DividerProps = {
  label?: string;
  className?: string;
} & FlexBoxProps;

const Segment = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.borderWidth[1]};
  background-color: ${({ theme }) => theme.colors.text};
`;

export function Divider({ label, className, ...flexProps }: DividerProps) {
  return (
    <FlexBox center className={className} {...flexProps}>
      {label && (
        <>
          <Segment />
          <Text as="p" fontWeight="bold" paddingX={16} variant="bodySmall">
            {label}
          </Text>
        </>
      )}
      <Segment />
    </FlexBox>
  );
}
