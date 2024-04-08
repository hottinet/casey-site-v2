import styled from '@emotion/styled';
import { FormEventHandler, useContext, useState } from 'react';

import { AUTH_ROUTE } from '~/constants/routing';
import { AuthorizationContext } from '~/contexts/authorizationContext';
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

enum Fields {
  password = 'password',
}

export function Unauthorized() {
  const [status, setStatus] = useState<'ok' | 'error' | 'loading'>('ok');
  const { setIsAuthorized } = useContext(AuthorizationContext);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    setStatus('loading');
    const res = await fetch(AUTH_ROUTE, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data.entries())),
    });
    if (res.ok) {
      setStatus('ok');
      setIsAuthorized(true);
    } else {
      setStatus('error');
    }
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
          <Label htmlFor={Fields.password}>
            <Box height="1px" overflow="hidden" width="1px">
              <Text variant="bodySmall">Password</Text>
            </Box>
            <PwInput
              name={Fields.password}
              placeholder="Enter password"
              type="password"
            />
          </Label>
          <Box maxWidth={pxToRem(150)}>
            <SubmitButton disabled={status === 'loading'} type="submit">
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
