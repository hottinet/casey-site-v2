import { createContext, Dispatch, SetStateAction } from 'react';

const context: {
  isAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
} = {
  isAuthorized: false,
  setIsAuthorized: () => null,
};

export const AuthContext = createContext(context);
