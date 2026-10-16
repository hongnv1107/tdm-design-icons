// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityCriticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.837 14.836C13.067 14.988 13.363 15.001 13.606 14.87C13.848 14.74 14 14.486 14 14.21V5.21C14 4.958 13.873 4.723 13.663 4.584L8.413 1.123C8.163 0.958 7.837 0.958 7.587 1.123L2.337 4.584C2.127 4.723 2 4.958 2 5.21V14.21L2.007 14.313C2.039 14.548 2.182 14.756 2.395 14.87C2.637 15.001 2.933 14.988 3.163 14.836L8 11.649L12.837 14.836ZM8.413 10.123C8.163 9.958 7.837 9.958 7.587 10.123L3.5 12.818V5.614L8 2.649L12.5 5.614V12.818L8.413 10.123Z"/>
  </svg>
);

const aDSPriorityCriticalIconDefinition = svgToIconDefinition(
  aDSPriorityCriticalSvg,
  'ads-priority-critical'
);

/**![ADSPriorityCritical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuODM3IDE0LjgzNkMxMy4wNjcgMTQuOTg4IDEzLjM2MyAxNS4wMDEgMTMuNjA2IDE0Ljg3QzEzLjg0OCAxNC43NCAxNCAxNC40ODYgMTQgMTQuMjFWNS4yMUMxNCA0Ljk1OCAxMy44NzMgNC43MjMgMTMuNjYzIDQuNTg0TDguNDEzIDEuMTIzQzguMTYzIDAuOTU4IDcuODM3IDAuOTU4IDcuNTg3IDEuMTIzTDIuMzM3IDQuNTg0QzIuMTI3IDQuNzIzIDIgNC45NTggMiA1LjIxVjE0LjIxTDIuMDA3IDE0LjMxM0MyLjAzOSAxNC41NDggMi4xODIgMTQuNzU2IDIuMzk1IDE0Ljg3QzIuNjM3IDE1LjAwMSAyLjkzMyAxNC45ODggMy4xNjMgMTQuODM2TDggMTEuNjQ5TDEyLjgzNyAxNC44MzZaTTguNDEzIDEwLjEyM0M4LjE2MyA5Ljk1OCA3LjgzNyA5Ljk1OCA3LjU4NyAxMC4xMjNMMy41IDEyLjgxOFY1LjYxNEw4IDIuNjQ5TDEyLjUgNS42MTRWMTIuODE4TDguNDEzIDEwLjEyM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityCriticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityCritical';
}

export default RefIcon;
