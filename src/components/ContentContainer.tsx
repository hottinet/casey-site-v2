import { useTheme } from '@emotion/react';

import { Spacing } from '~/typings/theme';
import { useSizeByBreakpoint } from '~/utils/useBreakpoints';

import { FlexBox, FlexBoxProps } from './box/FlexBox';

interface ContentContainerProps extends FlexBoxProps {
  metaPage?: boolean;
}

export const useContentContainerPadding = (
  metaPage?: ContentContainerProps['metaPage']
): Spacing => {
  const sizes = {
    base: 20,
    sm: 64,
    md: metaPage ? undefined : 128,
  };
  return useSizeByBreakpoint(sizes) as Spacing;
};

export function ContentContainer({
  children,
  metaPage,
  ...rest
}: ContentContainerProps) {
  const padding = useContentContainerPadding(metaPage);
  const theme = useTheme();

  return (
    <FlexBox
      flexDirection="column"
      maxWidth={`${theme.breakpointValues.xl}px`}
      paddingX={padding}
      {...rest}
    >
      {children}
    </FlexBox>
  );
}
