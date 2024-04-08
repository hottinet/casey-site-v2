import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '~/constants/theme';
import { useBreakpointsLessThan } from '~/utils/useBreakpoints';

import { Link, LinkProps } from '../Link';
import { Text } from '../typography/Text';

export const aboutLinkStyles = css`
  background-color: ${theme.colors.yellow};
  border-color: ${theme.colors.text};
  border-width: ${theme.borderWidth['3']};
  border-style: solid;
  border-radius: ${theme.borderRadius[200]};
  :hover {
    background-color: ${theme.colors.red};
  }
`;

export const AboutLinkButton = styled(Link)<LinkProps>(aboutLinkStyles);

interface AboutLinkButtonProps {
  children: string;
}

export function AboutLinkText({ children }: AboutLinkButtonProps) {
  const belowSm = useBreakpointsLessThan('sm');
  return (
    <Text
      fontWeight="bold"
      paddingX={belowSm ? 32 : 96}
      paddingY={16}
      textAlign="center"
      textTransform="uppercase"
      variant="bodySmall"
      width="100%"
    >
      {children}
    </Text>
  );
}
