import styled from '@emotion/styled';

const Divider = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.border.borderWidth[3]};
  background-color: ${({ theme }) => theme.colors.text};
`;

export default Divider;
