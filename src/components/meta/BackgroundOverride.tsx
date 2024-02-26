import { Global, useTheme } from '@emotion/react';

import { Color } from '~/typings/theme';
import { makePageBgOverride } from '~/utils/css';

interface BackgroundOverrideProps {
  color: Color;
}

export function BackgroundOverride({ color }: BackgroundOverrideProps) {
  const theme = useTheme();
  return <Global styles={makePageBgOverride(color, theme)} />;
}
