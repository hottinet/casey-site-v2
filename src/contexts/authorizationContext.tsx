import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface AuthorizationContextValue {
  isAuthorized: boolean;
  setAuthorized: (authorized: boolean) => void;
}

export const AuthorizationContext = createContext<AuthorizationContextValue>({
  isAuthorized: false,
  setAuthorized: () => {},
});

export function AuthorizationProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [isAuthorized, setAuthorized] = useState(false);

  const value = useMemo(
    () => ({ isAuthorized, setAuthorized }),
    [isAuthorized]
  );

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
}
