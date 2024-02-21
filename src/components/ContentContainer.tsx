import { useTheme } from '@emotion/react';

import { Spacing } from '~/typings/theme';
import { useSizeByBreakpoint } from '~/utils/useBreakpoints';

import { FlexBox, FlexBoxProps } from './box/FlexBox';

export const useContentContainerPadding = (): Spacing =>
  useSizeByBreakpoint({
    base: 20,
    sm: 64,
    md: 128,
  }) as Spacing;
export function ContentContainer({ children, ...rest }: FlexBoxProps) {
  const padding = useContentContainerPadding();
  const theme = useTheme();

  return (
    <FlexBox
      flexDirection="column"
      maxWidth={`${theme.breakpointValues.lg}px`}
      paddingX={padding}
      {...rest}
    >
      {children}
    </FlexBox>
  );
}
