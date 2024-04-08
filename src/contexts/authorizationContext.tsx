import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface AuthorizationContextValue {
  isAuthorized: boolean;
  setIsAuthorized: (authorized: boolean) => void;
}

export const AuthorizationContext = createContext<AuthorizationContextValue>({
  isAuthorized: false,
  setIsAuthorized: () => {},
});

export function AuthorizationProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const value = useMemo(
    () => ({ isAuthorized, setIsAuthorized }),
    [isAuthorized]
  );

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
}
