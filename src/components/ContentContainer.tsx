import { useTheme } from '@emotion/react';

import { FlexBox, FlexBoxProps } from './box/FlexBox';

interface ContentContainerProps extends FlexBoxProps {
  metaPage?: boolean;
}

export function ContentContainer({
  children,
  metaPage,
  ...rest
}: ContentContainerProps) {
  const theme = useTheme();

  return (
    <FlexBox
      flexDirection="column"
      maxWidth={`${theme.breakpointValues.xl}px`}
      paddingX={{ base: 20, sm: 64, md: metaPage ? undefined : 128 }}
      width="100%"
      {...rest}
    >
      {children}
    </FlexBox>
  );
}
