import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from './box/FlexBox';
import Button from './buttons/Button';
import { Text } from './typography/Text';

interface ImageClickerProps {
  children: React.ReactNode[];
  className?: string;
}

const ClickerWrapper = styled(FlexBox)`
  aspect-ratio: 1 / 1;
`;

const ImageButton = styled(Button)`
  border: none;
  padding: 0;
  margin: 0;
  outline: 0;
  display: inherit;
  position: relative;
`;

const Tooltip = styled(FlexBox)`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing[12]};
`;

const ImageCount = styled(Tooltip)`
  left: unset;
  right: 0;
`;

export function ImageClicker({ children, className }: ImageClickerProps) {
  const [childIndex, setChildIndex] = useState(0);

  const setNextIndex = () => {
    let nextIndex = childIndex + 1;
    if (nextIndex > children.length - 1) {
      nextIndex = 0;
    }
    setChildIndex(nextIndex);
  };

  return (
    <ClickerWrapper center className={className}>
      <ImageButton onClick={setNextIndex}>
        <>
          {children[childIndex]}
          <Tooltip margin={8} paddingX={24} paddingY={8}>
            <Text as="span" variant="bodySmall">
              Click to see the next image
            </Text>
          </Tooltip>
          <ImageCount margin={8} paddingX={24} paddingY={8}>
            <Text as="span" variant="bodySmall">
              {`${childIndex + 1}/${children.length}`}
            </Text>
          </ImageCount>
        </>
      </ImageButton>
    </ClickerWrapper>
  );
}
