import styled from '@emotion/styled';

import { pxToRem } from '~/utils/pxToRem';

import { Box } from '../box/Box';
import { FlexBox } from '../box/FlexBox';
import { aboutLinkStyles, AboutLinkText } from '../buttons/AboutLinkButton';
import { ContentContainer } from '../ContentContainer';
import { OnMouseSpan } from '../Link';
import { Text } from '../typography/Text';

const Label = styled('label')`
  display: flex;
  flex-direction: column;
`;

const PwInput = styled('input')(({ theme }) => ({
  padding: theme.spacing[16],
  fontSize: theme.fontSize.bodyLarge,
  background: 'transparent',
  border: `${theme.borderWidth[2]} solid ${theme.colors.text}`,
  borderRadius: theme.borderRadius[8],
  textAlign: 'center',
  width: '100%',
}));

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[20]};
  align-items: center;
`;

const SubmitButton = styled('button')`
  ${aboutLinkStyles}
  width: 100%;
`;

export function Unauthorized() {
  const onSubmit = () => {
    // console.log('submitted');
  };

  return (
    <FlexBox
      flex={1}
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <ContentContainer gap={20} textAlign="center">
        <Text as="h1" marginTop={pxToRem(20)} variant="bodySmall">
          You need a password to view this page
        </Text>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="password">
            <Box height="1px" overflow="hidden" width="1px">
              <Text variant="bodySmall">Password</Text>
            </Box>
            <PwInput placeholder="Enter password" type="password" />
          </Label>
          <Box maxWidth={pxToRem(150)}>
            <SubmitButton type="submit">
              <OnMouseSpan>
                <AboutLinkText>Submit</AboutLinkText>
              </OnMouseSpan>
            </SubmitButton>
          </Box>
        </Form>
      </ContentContainer>
    </FlexBox>
  );
}
