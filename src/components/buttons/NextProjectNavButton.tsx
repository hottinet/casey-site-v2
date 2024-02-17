import styled from '@emotion/styled';
import { useState } from 'react';

import { NAV_BAR_HEIGHT } from '~/constants/styles';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import Arrow from '../icons/Arrow';
import { Link } from '../Link';
import { Text } from '../typography/Text';
import { Animator, makeSharedRotatingButtonStyles } from './RotatingIconButton';

const NextProjectLink = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  height: ${NAV_BAR_HEIGHT};
  background-color: ${({ theme }) => theme.colors.blue};
`;

const ArrowWrapper = styled(Box)<{ hovered: boolean }>(({ theme, hovered }) =>
  makeSharedRotatingButtonStyles({
    theme,
    color: 'textSecondary',
    forceHover: hovered,
    borderWidth: 2,
  })
);

interface NextProjectButtonProps {
  nextPageHref?: string;
}

export function NextProjectButton({ nextPageHref }: NextProjectButtonProps) {
  const [hovered, setHovered] = useState(false);
  if (!nextPageHref) {
    return null;
  }
  return (
    <NextProjectLink
      href={nextPageHref}
      internal
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <FlexBox alignItems="center" gap={12} height="100%" paddingX={32}>
        <ArrowWrapper height={20} hovered={hovered} width={20}>
          <Animator borderRadius="round" center>
            <Arrow height={12} title="" titleId="" width={12} />
          </Animator>
        </ArrowWrapper>
        <Text color="textSecondary" variant="subtitle3">
          Next&nbsp;Project
        </Text>
      </FlexBox>
    </NextProjectLink>
  );
}
