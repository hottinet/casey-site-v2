import styled from '@emotion/styled';

export const IconButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  height: theme.spacing['48'],
  width: theme.spacing['48'],
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
