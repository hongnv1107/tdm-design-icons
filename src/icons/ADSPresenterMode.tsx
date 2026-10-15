// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPresenterModeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.909 2.5C3.578 2.5 2.5 3.578 2.5 4.909C2.5 5.86 3.051 6.684 3.855 7.076L3.198 8.424C1.898 7.79 1 6.455 1 4.909C1 2.75 2.75 1 4.909 1C6.455 1 7.791 1.898 8.424 3.198L7.076 3.855C6.684 3.051 5.86 2.5 4.909 2.5ZM4.72 4.72C4.926 4.514 5.231 4.446 5.505 4.545L14.505 7.795C14.798 7.901 14.996 8.177 15 8.489C15.005 8.801 14.815 9.083 14.525 9.198L10.704 10.703L9.198 14.525C9.084 14.815 8.801 15.004 8.489 15C8.177 14.995 7.901 14.798 7.795 14.505L4.545 5.505C4.446 5.231 4.514 4.925 4.72 4.72ZM6.498 6.498L8.531 12.126L9.427 9.85C9.504 9.657 9.657 9.503 9.85 9.427L12.127 8.531L6.498 6.498Z"/>
  </svg>
);

const aDSPresenterModeIconDefinition = svgToIconDefinition(
  aDSPresenterModeSvg,
  'ads-presenter-mode'
);

/**![ADSPresenterMode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuOTA5IDIuNUMzLjU3OCAyLjUgMi41IDMuNTc4IDIuNSA0LjkwOUMyLjUgNS44NiAzLjA1MSA2LjY4NCAzLjg1NSA3LjA3NkwzLjE5OCA4LjQyNEMxLjg5OCA3Ljc5IDEgNi40NTUgMSA0LjkwOUMxIDIuNzUgMi43NSAxIDQuOTA5IDFDNi40NTUgMSA3Ljc5MSAxLjg5OCA4LjQyNCAzLjE5OEw3LjA3NiAzLjg1NUM2LjY4NCAzLjA1MSA1Ljg2IDIuNSA0LjkwOSAyLjVaTTQuNzIgNC43MkM0LjkyNiA0LjUxNCA1LjIzMSA0LjQ0NiA1LjUwNSA0LjU0NUwxNC41MDUgNy43OTVDMTQuNzk4IDcuOTAxIDE0Ljk5NiA4LjE3NyAxNSA4LjQ4OUMxNS4wMDUgOC44MDEgMTQuODE1IDkuMDgzIDE0LjUyNSA5LjE5OEwxMC43MDQgMTAuNzAzTDkuMTk4IDE0LjUyNUM5LjA4NCAxNC44MTUgOC44MDEgMTUuMDA0IDguNDg5IDE1QzguMTc3IDE0Ljk5NSA3LjkwMSAxNC43OTggNy43OTUgMTQuNTA1TDQuNTQ1IDUuNTA1QzQuNDQ2IDUuMjMxIDQuNTE0IDQuOTI1IDQuNzIgNC43MlpNNi40OTggNi40OThMOC41MzEgMTIuMTI2TDkuNDI3IDkuODVDOS41MDQgOS42NTcgOS42NTcgOS41MDMgOS44NSA5LjQyN0wxMi4xMjcgOC41MzFMNi40OTggNi40OThaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPresenterModeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPresenterMode';
}

export default RefIcon;
