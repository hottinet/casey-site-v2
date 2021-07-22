import React, { createContext } from 'react';

export const HoverImageContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);
