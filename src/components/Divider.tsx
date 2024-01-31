import styled from '@emotion/styled';

import { FlexBox, FlexBoxProps } from './box/FlexBox';
import Body from './typography/Body';

type DividerProps = {
  label?: string;
  className?: string;
} & Pick<FlexBoxProps, 'marginBottom' | 'marginTop'>;

const Segment = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.borderWidth[1]};
  background-color: ${({ theme }) => theme.colors.textQuote};
`;

const Label = styled(Body)`
  padding: 0 ${({ theme }) => theme.spacing[16]};
`;

export function Divider({
  label,
  className,
  marginBottom,
  marginTop,
}: DividerProps) {
  return (
    <FlexBox
      center
      className={className}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {label && (
        <>
          <Segment />
          <Label bold mb={0}>
            {label}
          </Label>
        </>
      )}
      <Segment />
    </FlexBox>
  );
}
