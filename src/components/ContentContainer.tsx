import { Spacing } from '~/typings/theme';
import { useBreakpointsAtLeast } from '~/utils/useBreakpoints';

import { FlexBox, FlexBoxProps } from './box/FlexBox';

export const useContentContainerPadding = (): Spacing => {
  const mdUp = useBreakpointsAtLeast('md');

  return mdUp ? 64 : 20;
};
export function ContentContainer({ children, ...rest }: FlexBoxProps) {
  const padding = useContentContainerPadding();

  return (
    <FlexBox flexDirection="column" paddingX={padding} {...rest}>
      {children}
    </FlexBox>
  );
}
