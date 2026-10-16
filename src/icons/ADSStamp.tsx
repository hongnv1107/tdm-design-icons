// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStampSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.074 3.007C3.841 1.422 5.069 0 6.671 0H9.329C10.931 0 12.159 1.422 11.926 3.007L11.118 8.5H12.375C13.825 8.5 15 9.675 15 11.125V12.75C15 13.164 14.664 13.5 14.25 13.5H1.75C1.336 13.5 1 13.164 1 12.75V11.125C1 9.675 2.175 8.5 3.625 8.5H4.882L4.074 3.007ZM6.671 1.5C5.984 1.5 5.458 2.11 5.558 2.789L6.492 9.141C6.524 9.357 6.46 9.575 6.318 9.74C6.175 9.905 5.968 10 5.75 10H3.625C3.004 10 2.5 10.504 2.5 11.125V12H13.5V11.125C13.5 10.504 12.996 10 12.375 10H10.25C10.032 10 9.825 9.905 9.682 9.74C9.54 9.575 9.476 9.357 9.508 9.141L10.442 2.789C10.542 2.11 10.016 1.5 9.329 1.5H6.671ZM13.5 16H2.5V14.5H13.5V16Z"/>
  </svg>
);

const aDSStampIconDefinition = svgToIconDefinition(
  aDSStampSvg,
  'ads-stamp'
);

/**![ADSStamp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4wNzQgMy4wMDdDMy44NDEgMS40MjIgNS4wNjkgMCA2LjY3MSAwSDkuMzI5QzEwLjkzMSAwIDEyLjE1OSAxLjQyMiAxMS45MjYgMy4wMDdMMTEuMTE4IDguNUgxMi4zNzVDMTMuODI1IDguNSAxNSA5LjY3NSAxNSAxMS4xMjVWMTIuNzVDMTUgMTMuMTY0IDE0LjY2NCAxMy41IDE0LjI1IDEzLjVIMS43NUMxLjMzNiAxMy41IDEgMTMuMTY0IDEgMTIuNzVWMTEuMTI1QzEgOS42NzUgMi4xNzUgOC41IDMuNjI1IDguNUg0Ljg4Mkw0LjA3NCAzLjAwN1pNNi42NzEgMS41QzUuOTg0IDEuNSA1LjQ1OCAyLjExIDUuNTU4IDIuNzg5TDYuNDkyIDkuMTQxQzYuNTI0IDkuMzU3IDYuNDYgOS41NzUgNi4zMTggOS43NEM2LjE3NSA5LjkwNSA1Ljk2OCAxMCA1Ljc1IDEwSDMuNjI1QzMuMDA0IDEwIDIuNSAxMC41MDQgMi41IDExLjEyNVYxMkgxMy41VjExLjEyNUMxMy41IDEwLjUwNCAxMi45OTYgMTAgMTIuMzc1IDEwSDEwLjI1QzEwLjAzMiAxMCA5LjgyNSA5LjkwNSA5LjY4MiA5Ljc0QzkuNTQgOS41NzUgOS40NzYgOS4zNTcgOS41MDggOS4xNDFMMTAuNDQyIDIuNzg5QzEwLjU0MiAyLjExIDEwLjAxNiAxLjUgOS4zMjkgMS41SDYuNjcxWk0xMy41IDE2SDIuNVYxNC41SDEzLjVWMTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStampIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStamp';
}

export default RefIcon;
