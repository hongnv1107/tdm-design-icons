// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSProblemSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.343 2.343C5.467 -0.781 10.533 -0.781 13.658 2.343C16.782 5.467 16.782 10.533 13.658 13.658C10.533 16.782 5.467 16.782 2.343 13.658C-0.781 10.533 -0.781 5.467 2.343 2.343ZM2.905 3.965C0.879 6.517 1.045 10.238 3.404 12.597C5.763 14.956 9.483 15.121 12.035 13.095L2.905 3.965ZM12.597 3.404C10.238 1.045 6.517 0.879 3.965 2.905L13.095 12.035C15.121 9.483 14.956 5.763 12.597 3.404Z"/>
  </svg>
);

const aDSProblemIconDefinition = svgToIconDefinition(
  aDSProblemSvg,
  'ads-problem'
);

/**![ADSProblem](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi4zNDMgMi4zNDNDNS40NjcgLTAuNzgxIDEwLjUzMyAtMC43ODEgMTMuNjU4IDIuMzQzQzE2Ljc4MiA1LjQ2NyAxNi43ODIgMTAuNTMzIDEzLjY1OCAxMy42NThDMTAuNTMzIDE2Ljc4MiA1LjQ2NyAxNi43ODIgMi4zNDMgMTMuNjU4Qy0wLjc4MSAxMC41MzMgLTAuNzgxIDUuNDY3IDIuMzQzIDIuMzQzWk0yLjkwNSAzLjk2NUMwLjg3OSA2LjUxNyAxLjA0NSAxMC4yMzggMy40MDQgMTIuNTk3QzUuNzYzIDE0Ljk1NiA5LjQ4MyAxNS4xMjEgMTIuMDM1IDEzLjA5NUwyLjkwNSAzLjk2NVpNMTIuNTk3IDMuNDA0QzEwLjIzOCAxLjA0NSA2LjUxNyAwLjg3OSAzLjk2NSAyLjkwNUwxMy4wOTUgMTIuMDM1QzE1LjEyMSA5LjQ4MyAxNC45NTYgNS43NjMgMTIuNTk3IDMuNDA0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSProblemIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSProblem';
}

export default RefIcon;
