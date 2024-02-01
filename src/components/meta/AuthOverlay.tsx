import styled from '@emotion/styled';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useContext,
  useState,
} from 'react';

import Body from '~/components/typography/Body';
import Heading from '~/components/typography/Heading';
import { AuthContext } from '~/contexts/authContext';

import { Box } from '../box/Box';
import { IconButton } from '../buttons/IconButton';
import Pickle from '../pickles/Pickle';

const Input = styled.input(({ theme }) => ({
  backgroundColor: 'transparent',
  height: theme.spacing[48],
  minWidth: theme.spacing[128],
  fontSize: '3rem',
  padding: theme.spacing[8],
  outline: 'none',
  border: 'none',
  borderBottom: `2px solid ${theme.colors.textSecondary}`,
  color: theme.colors.textSecondary,
  width: '100%',
  '::placeholder': {
    color: theme.colors.textSecondary,
    opacity: '50%',
  },
  [theme.breakpoints.sm]: {
    fontSize: '6.25rem',
    height: theme.spacing[80],
  },
}));

const PwIconButton = styled(IconButton)(({ theme }) => ({
  width: theme.spacing[96],
  height: theme.spacing[96],
  flexShrink: 0,
  marginLeft: theme.spacing[24],
}));

const PwHeading = styled(Heading)`
  margin-left: ${({ theme }) => theme.spacing[24]};
`;

const ButtonBody = styled(Body)`
  color: white;
`;

const PwPickle = styled(Pickle)<{ isWrong?: boolean }>`
  background-color: ${({ theme, isWrong }) =>
    isWrong ? theme.colors.red : theme.colors.green};
  width: 94%;
  padding: ${({ theme }) => theme.spacing[24]};
  border: none;
  justify-content: space-between;
`;

type PasswordInputProps = {
  setIsWrong: (isWrong: boolean) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ setIsWrong }) => {
  const { setIsAuthorized } = useContext(AuthContext);
  const [password, setPassword] = useState('');

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

  const onEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <>
      <Input
        key="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChange}
        onKeyUp={onEnter}
      />
      <PwIconButton type="submit" variant="secondary" onClick={onSubmit}>
        <ButtonBody bold mb={0}>
          Submit
        </ButtonBody>
      </PwIconButton>
    </>
  );
};

const AuthOverlay: React.FC = () => {
  const [isWrong, setIsWrong] = useState(false);
  return (
    <Box>
      <PwHeading>A password is required to view this page</PwHeading>
      <PwPickle isWrong={isWrong}>
        <PasswordInput setIsWrong={setIsWrong} />
      </PwPickle>
    </Box>
  );
};
export default AuthOverlay;
