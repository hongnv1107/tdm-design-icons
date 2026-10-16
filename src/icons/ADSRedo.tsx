// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRedoSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 4.72L11.28 1.22L10.22 2.28L12.439 4.5L5.75 4.5C3.127 4.5 1 6.627 1 9.25C1 11.873 3.127 14 5.75 14H8V12.5H5.75C3.955 12.5 2.5 11.045 2.5 9.25C2.5 7.455 3.955 6 5.75 6L12.439 6L10.22 8.22L11.28 9.28L14.78 5.78C14.921 5.64 15 5.449 15 5.25C15 5.051 14.921 4.86 14.78 4.72Z"/>
  </svg>
);

const aDSRedoIconDefinition = svgToIconDefinition(
  aDSRedoSvg,
  'ads-redo'
);

/**![ADSRedo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0Ljc4IDQuNzJMMTEuMjggMS4yMkwxMC4yMiAyLjI4TDEyLjQzOSA0LjVMNS43NSA0LjVDMy4xMjcgNC41IDEgNi42MjcgMSA5LjI1QzEgMTEuODczIDMuMTI3IDE0IDUuNzUgMTRIOFYxMi41SDUuNzVDMy45NTUgMTIuNSAyLjUgMTEuMDQ1IDIuNSA5LjI1QzIuNSA3LjQ1NSAzLjk1NSA2IDUuNzUgNkwxMi40MzkgNkwxMC4yMiA4LjIyTDExLjI4IDkuMjhMMTQuNzggNS43OEMxNC45MjEgNS42NCAxNSA1LjQ0OSAxNSA1LjI1QzE1IDUuMDUxIDE0LjkyMSA0Ljg2IDE0Ljc4IDQuNzJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRedoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRedo';
}

export default RefIcon;
