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
>`
  margin: ${({ leftOnly, widthRatio = 1 }) =>
    `0 ${leftOnly ? 0 : `${13 * widthRatio}%`} 0 ${13 * widthRatio}%`};
`;

const ContentBox: React.FC<ContentBoxProps> = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
);

export default ContentBox;
