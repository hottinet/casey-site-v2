import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { NON_BREAKING_SPACE } from '~/constants/characterEntitites';
import { NAV_BAR_HEIGHT } from '~/constants/styles';

import { FlexBox } from '../box/FlexBox';
import Arrow from '../icons/Arrow';
import { Link } from '../Link';
import { Text } from '../typography/Text';

const NextProjectLink = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  height: ${NAV_BAR_HEIGHT};
  background-color: ${({ theme }) => theme.colors.blue};
`;

const spin = keyframes`
  from {
    transform: rotate3D(0, 1, 0, 0deg);
  }
  to {
    transform: rotate3D(0, 1, 0, 360deg);
  }
`;

const Animator = styled(FlexBox)<{ hovered: boolean }>(({ hovered }) => ({
  ...(hovered && {
    animation: `${spin} 2s linear infinite`,
  }),
}));

interface NextProjectButtonProps {
  nextPageHref?: string;
  nextPageLabel?: string;
}

export function NextProjectButton({
  nextPageHref,
  nextPageLabel = `Next${NON_BREAKING_SPACE}Project`,
}: NextProjectButtonProps) {
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
        <Animator
          alignItems="center"
          borderColor="textSecondary"
          borderRadius="round"
          borderStyle="solid"
          borderWidth={2}
          height={20}
          hovered={hovered}
          justifyContent="center"
          width={20}
        >
          <Arrow height={12} title="" titleId="" width={12} />
        </Animator>
        <Text color="textSecondary" variant="subtitle3">
          {nextPageLabel}
        </Text>
      </FlexBox>
    </NextProjectLink>
  );
}
