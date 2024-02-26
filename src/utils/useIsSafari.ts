import { useEffect, useState } from 'react';

export const checkIsSafari = () => {
  const { userAgent } = navigator;
  return userAgent.includes('Safari') && !userAgent.includes('Chrome');
};

export const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(checkIsSafari());
  }, []);

  return isSafari;
};
