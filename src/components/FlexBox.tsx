import styled from '@emotion/styled';

type FlexBoxProps = {
  center?: boolean;
  column?: boolean;
  wrap?: boolean;
  inline?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  flex?: number;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  children: React.ReactNode | React.ReactNode[];
};

const Flex = styled.div<Omit<FlexBoxProps, 'children'>>(
  { display: 'flex' },
  ({
    center,
    column,
    wrap,
    inline,
    justifyContent,
    alignItems,
    flex,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
  }) => ({
    justifyContent,
    alignItems,
    flex,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    ...(center && {
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...(column && {
      flexDirection: 'column',
    }),
    ...(wrap && {
      flexWrap: 'wrap',
    }),
    ...(inline && {
      display: 'inline-flex',
    }),
  })
);

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex {...rest}>{children}</Flex>
);

export default FlexBox;
