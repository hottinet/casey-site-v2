import styled from '@emotion/styled';

import { HOME_ROUTE } from '~/constants/routing';
import { spin } from '~/constants/styles';
import { pxToRem } from '~/utils/pxToRem';

import { Link } from './Link';
import { Text } from './typography/Text';

const CASEY_BRADFORD = [
  'C',
  'a',
  's',
  'e',
  'y',
  '',
  'B',
  'r',
  'a',
  'd',
  'f',
  'o',
  'r',
  'd',
];

const Letter = styled('span')<{ index: number }>`
  animation-delay: ${({ index }) => `${index * 0.2}s`} !important;
  display: inline-block;
`;

const NameText = styled(Text)`
  :hover {
    ${Letter} {
      animation: ${spin} 1s linear;
    }
  }
`;

export function CaseyHomeLink() {
  return (
    <Link href={HOME_ROUTE} internal noHoverStyles title="Casey Bradford">
      <NameText fontWeight="bold" letterSpacing="3%" textTransform="uppercase">
        {CASEY_BRADFORD.map((letter, index) =>
          letter ? (
            // eslint-disable-next-line react/no-array-index-key
            <Letter index={index} key={`${letter}${index}`}>
              {letter}
            </Letter>
          ) : (
            <span
              key="space"
              style={{
                display: 'inline-block',
                width: pxToRem(4),
              }}
            />
          )
        )}
      </NameText>
    </Link>
  );
}
