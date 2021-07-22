import styled from '@emotion/styled';
import { ChangeEventHandler, useContext, useState } from 'react';

import Heading from '~/components/typography/Heading';
import { AuthContext } from '~/contexts/authContext';

import Box from '../box/Box';
import FlexBox from '../box/FlexBox';
import TextButton from '../buttons/TextButton';

const Input = styled.input<{ isWrong?: boolean }>`
  height: ${({ theme }) => theme.spacing[48]};
  width: 33%;
  min-width: ${({ theme }) => theme.spacing[128]};
  font-size: ${({ theme }) => theme.fontSize.heading};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  padding: ${({ theme }) => theme.spacing[8]};
  border-color: ${({ theme, isWrong }) => isWrong && theme.colors.red};
  border-radius: ${({ theme }) => theme.spacing[4]};
`;

const AuthOverlay: React.FC = () => {
  const { setIsAuthorized } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setPassword(e.target.value);

  const onSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthorized(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }
    setPassword('');
  };

  return (
    <Box>
      <FlexBox center column mb={80}>
        <Heading>A password is required to view this page</Heading>
        <Input
          isWrong={isWrong}
          type="password"
          value={password}
          onChange={onChange}
        />
        <TextButton label="Submit" type="submit" onClick={onSubmit} />
      </FlexBox>
    </Box>
  );
};
export default AuthOverlay;
