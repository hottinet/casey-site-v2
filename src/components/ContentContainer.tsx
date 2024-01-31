import { Spacing } from '~/typings/theme';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box, BoxProps } from './box/Box';

export const useContentContainerPadding = (): Spacing => {
  const mdUp = useBreakpointsAtLeast('md');

  return mdUp ? 64 : 20;
};
export function ContentContainer({ children, ...rest }: BoxProps) {
  const padding = useContentContainerPadding();

  return (
    <Box paddingX={padding} {...rest}>
      {children}
    </Box>
  );
}
