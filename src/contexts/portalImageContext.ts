import React, { createContext } from 'react';

export const PortalImageContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);
