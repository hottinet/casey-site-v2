import { useContext } from 'react';

import { BreakpointSize } from '~/typings/theme';

import { BreakpointsContext } from '../contexts/breakpointsContext';

export const useBreakpointsLessThan = (breakpoint: BreakpointSize) => {
  const breakpoints = useContext(BreakpointsContext);
  return !breakpoints.includes(breakpoint);
};

export const useBreakpointsAtLeast = (breakpoint: BreakpointSize) => {
  const breakpoints = useContext(BreakpointsContext);
  return breakpoints.includes(breakpoint);
};

export const useBreakpointsIsExactly = (breakpoint: BreakpointSize) => {
  const breakpoints = useContext(BreakpointsContext);
  return breakpoints[breakpoints.length - 1] === breakpoint;
};

export const useBreakpointsIsGreaterThan = (breakpoint: BreakpointSize) => {
  const breakpoints = useContext(BreakpointsContext);
  return (
    breakpoints.includes(breakpoint) &&
    breakpoints[breakpoints.length - 1] !== breakpoint
  );
};

interface UseXByBreakpointArgs<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export const useXByBreakpoint = <T>({
  base,
  sm,
  md,
  lg,
  xl,
}: UseXByBreakpointArgs<T>) => {
  const smUp = useBreakpointsAtLeast('sm');
  const mdUp = useBreakpointsAtLeast('md');
  const lgUp = useBreakpointsAtLeast('lg');
  const xlUp = useBreakpointsAtLeast('xl');

  let size = base;

  if (smUp && sm) {
    size = sm;
  }
  if (mdUp && md) {
    size = md;
  }
  if (lgUp && lg) {
    size = lg;
  }
  if (xlUp && xl) {
    size = xl;
  }

  return size;
};

export const useSizeByBreakpoint = (args: UseXByBreakpointArgs<number>) =>
  useXByBreakpoint<number>(args);
