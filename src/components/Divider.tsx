import styled from '@emotion/styled';

const Divider = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.border.borderWidth[3]};
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing[48]};
  margin-bottom: ${({ theme }) => theme.spacing[80]};
`;

export default Divider;
