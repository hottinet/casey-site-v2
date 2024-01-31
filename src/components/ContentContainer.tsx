import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { Box } from './box/Box';
import { BoxProps } from './box/types';

export function ContentContainer({ children, ...rest }: BoxProps) {
  const mdUp = useBreakpointsAtLeast('md');

  return (
    <Box paddingX={mdUp ? 64 : 20} {...rest}>
      {children}
    </Box>
  );
}
