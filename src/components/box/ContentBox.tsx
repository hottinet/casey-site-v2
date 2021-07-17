/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled';

import FlexBox, { FlexBoxProps } from './FlexBox';
import GridBox, { GridBoxProps } from './GridBox';

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
  margin: `0 ${5 * widthRatio}% 0 ${5 * widthRatio}%`,
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
