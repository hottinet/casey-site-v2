/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled';

import FlexBox, { FlexBoxProps } from './FlexBox';
import GridBox, { GridBoxProps } from './GridBox';

const extractRemVal = (remString: string) => {
  const captureRemRegex = /\d+.?\d+/;
  const match = remString.match(captureRemRegex)?.[0] || '0';
  return parseFloat(match);
};

type ContentBoxProps = {
  leftOnly?: boolean;
  grid?: boolean;
  widthRatio?: number;
} & (FlexBoxProps | GridBoxProps);

const Wrapper: React.FC<ContentBoxProps> = ({ grid, children, ...rest }) =>
  grid ? (
    <GridBox {...rest}>{children}</GridBox>
  ) : (
    <FlexBox {...rest}>{children}</FlexBox>
  );

const StyledBox = styled(Wrapper)<
  Pick<ContentBoxProps, 'leftOnly' | 'widthRatio'>
>(({ leftOnly, widthRatio = 1, theme }) => ({
  margin: `0 ${extractRemVal(theme.spacing[24]) * widthRatio}rem 0 ${
    extractRemVal(theme.spacing[24]) * widthRatio
  }rem`,
  ...(leftOnly && {
    marginRight: 0,
  }),
  [theme.breakpoints.md]: {
    margin: `0 ${13 * widthRatio}% 0 ${13 * widthRatio}%`,
  },
}));

const ContentBox: React.FC<ContentBoxProps> = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
);

export default ContentBox;
