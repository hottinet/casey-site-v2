import styled from '@emotion/styled';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { ContentContainer } from '../ContentContainer';
import { Text } from '../typography/Text';

const Label = styled('label')`
  display: flex;
  flex-direction: column;
`;

const PwInput = styled('input')(({ theme }) => ({
  padding: theme.spacing[4],
  fontSize: theme.fontSize.bodyLarge,
  background: 'transparent',
  outline: 'none',
  border: `${theme.borderWidth[2]} solid ${theme.colors.text}`,
  borderRadius: theme.borderRadius[8],
}));

export function Unauthorized() {
  return (
    <FlexBox flex={1} flexDirection="column" justifyContent="center">
      <ContentContainer gap={16} textAlign="center">
        <Text as="h1" variant="bodySmall">
          You need a password to view this page
        </Text>
        <form>
          <Label htmlFor="password">
            <Box height="1px" overflow="hidden" width="1px">
              <Text variant="bodySmall">Password</Text>
            </Box>
            <PwInput type="password" />
          </Label>
        </form>
      </ContentContainer>
    </FlexBox>
  );
}
