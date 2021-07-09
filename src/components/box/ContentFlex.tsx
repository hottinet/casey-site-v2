import styled from '@emotion/styled';

import FlexBox from './FlexBox';

const ContentBox = styled(FlexBox)<{ leftOnly?: boolean }>`
  margin: ${({ leftOnly }) => `0 ${leftOnly ? 0 : '13%'} 0 13%`};
`;

export default ContentBox;
