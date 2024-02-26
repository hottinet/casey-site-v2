import { useEffect, useState } from 'react';

export const checkIsIOS = () => {
  const { userAgent } = navigator;
  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    // iPad on iOS 13 detection
    (userAgent.includes('Mac') && 'ontouchend' in document)
  );
};

export const useIsIOS = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(checkIsIOS());
  }, []);

  return isIOS;
};
