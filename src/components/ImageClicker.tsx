import styled from '@emotion/styled';
import { useState } from 'react';

import FlexBox from './box/FlexBox';
import Button from './buttons/Button';
import Body from './typography/Body';

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

const TooltipLabel = styled(Body)`
  font-size: ${({ theme }) => theme.fontSize.subBody};
`;

const ImageCount = styled(Tooltip)`
  left: unset;
  right: 0;
`;

export const ImageClicker: React.FC<ImageClickerProps> = ({
  children,
  className,
}) => {
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
          <Tooltip m={8} px={24} py={8}>
            <TooltipLabel mb={0}>Click to see the next image</TooltipLabel>
          </Tooltip>
          <ImageCount m={8} px={24} py={8}>
            <TooltipLabel mb={0}>
              {`${childIndex + 1}/${children.length}`}
            </TooltipLabel>
          </ImageCount>
        </>
      </ImageButton>
    </ClickerWrapper>
  );
};
