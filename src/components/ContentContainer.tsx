import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box, BoxProps } from './box/Box';

export function ContentContainer({ children, ...rest }: BoxProps) {
  const mdUp = useBreakpointsAtLeast('md');

  return (
    <Box paddingX={mdUp ? 64 : 20} {...rest}>
      {children}
    </Box>
  );
}
