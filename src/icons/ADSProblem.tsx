// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSProblemSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSProblem](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yLjM0MyAyLjM0M0M1LjQ2NyAtMC43ODEgMTAuNTMzIC0wLjc4MSAxMy42NTggMi4zNDNDMTYuNzgyIDUuNDY3IDE2Ljc4MiAxMC41MzMgMTMuNjU4IDEzLjY1OEMxMC41MzMgMTYuNzgyIDUuNDY3IDE2Ljc4MiAyLjM0MyAxMy42NThDLTAuNzgxIDEwLjUzMyAtMC43ODEgNS40NjcgMi4zNDMgMi4zNDNaTTIuOTA1IDMuOTY1QzAuODc5IDYuNTE3IDEuMDQ1IDEwLjIzOCAzLjQwNCAxMi41OTdDNS43NjMgMTQuOTU2IDkuNDgzIDE1LjEyMSAxMi4wMzUgMTMuMDk1TDIuOTA1IDMuOTY1Wk0xMi41OTcgMy40MDRDMTAuMjM4IDEuMDQ1IDYuNTE3IDAuODc5IDMuOTY1IDIuOTA1TDEzLjA5NSAxMi4wMzVDMTUuMTIxIDkuNDgzIDE0Ljk1NiA1Ljc2MyAxMi41OTcgMy40MDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSProblemIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSProblem';
}

export default RefIcon;
