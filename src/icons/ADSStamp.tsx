// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStampSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStamp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMDc0IDMuMDA3QzMuODQxIDEuNDIyIDUuMDY5IDAgNi42NzEgMEg5LjMyOUMxMC45MzEgMCAxMi4xNTkgMS40MjIgMTEuOTI2IDMuMDA3TDExLjExOCA4LjVIMTIuMzc1QzEzLjgyNSA4LjUgMTUgOS42NzUgMTUgMTEuMTI1VjEyLjc1QzE1IDEzLjE2NCAxNC42NjQgMTMuNSAxNC4yNSAxMy41SDEuNzVDMS4zMzYgMTMuNSAxIDEzLjE2NCAxIDEyLjc1VjExLjEyNUMxIDkuNjc1IDIuMTc1IDguNSAzLjYyNSA4LjVINC44ODJMNC4wNzQgMy4wMDdaTTYuNjcxIDEuNUM1Ljk4NCAxLjUgNS40NTggMi4xMSA1LjU1OCAyLjc4OUw2LjQ5MiA5LjE0MUM2LjUyNCA5LjM1NyA2LjQ2IDkuNTc1IDYuMzE4IDkuNzRDNi4xNzUgOS45MDUgNS45NjggMTAgNS43NSAxMEgzLjYyNUMzLjAwNCAxMCAyLjUgMTAuNTA0IDIuNSAxMS4xMjVWMTJIMTMuNVYxMS4xMjVDMTMuNSAxMC41MDQgMTIuOTk2IDEwIDEyLjM3NSAxMEgxMC4yNUMxMC4wMzIgMTAgOS44MjUgOS45MDUgOS42ODIgOS43NEM5LjU0IDkuNTc1IDkuNDc2IDkuMzU3IDkuNTA4IDkuMTQxTDEwLjQ0MiAyLjc4OUMxMC41NDIgMi4xMSAxMC4wMTYgMS41IDkuMzI5IDEuNUg2LjY3MVpNMTMuNSAxNkgyLjVWMTQuNUgxMy41VjE2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStampIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStamp';
}

export default RefIcon;
