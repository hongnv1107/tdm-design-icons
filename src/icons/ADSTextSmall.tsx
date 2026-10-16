// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSmallSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1V2.5H6.251V15H4.751V2.5H0V1H11ZM14.5 12.375V11.875C14.5 11.254 13.996 10.75 13.375 10.75H11.625C10.175 10.75 9 9.575 9 8.125V7.625C9 6.175 10.175 5 11.625 5H13.5C14.881 5 16 6.119 16 7.5H14.5C14.5 6.948 14.052 6.5 13.5 6.5H11.625C11.004 6.5 10.5 7.004 10.5 7.625V8.125C10.5 8.746 11.004 9.25 11.625 9.25H13.375C14.825 9.25 16 10.425 16 11.875V12.375C16 13.825 14.825 15 13.375 15H11.5C10.119 15 9 13.881 9 12.5H10.5C10.5 13.052 10.948 13.5 11.5 13.5H13.375C13.996 13.5 14.5 12.996 14.5 12.375Z"/>
  </svg>
);

const aDSTextSmallIconDefinition = svgToIconDefinition(
  aDSTextSmallSvg,
  'ads-text-small'
);

/**![ADSTextSmall](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSAxVjIuNUg2LjI1MVYxNUg0Ljc1MVYyLjVIMFYxSDExWk0xNC41IDEyLjM3NVYxMS44NzVDMTQuNSAxMS4yNTQgMTMuOTk2IDEwLjc1IDEzLjM3NSAxMC43NUgxMS42MjVDMTAuMTc1IDEwLjc1IDkgOS41NzUgOSA4LjEyNVY3LjYyNUM5IDYuMTc1IDEwLjE3NSA1IDExLjYyNSA1SDEzLjVDMTQuODgxIDUgMTYgNi4xMTkgMTYgNy41SDE0LjVDMTQuNSA2Ljk0OCAxNC4wNTIgNi41IDEzLjUgNi41SDExLjYyNUMxMS4wMDQgNi41IDEwLjUgNy4wMDQgMTAuNSA3LjYyNVY4LjEyNUMxMC41IDguNzQ2IDExLjAwNCA5LjI1IDExLjYyNSA5LjI1SDEzLjM3NUMxNC44MjUgOS4yNSAxNiAxMC40MjUgMTYgMTEuODc1VjEyLjM3NUMxNiAxMy44MjUgMTQuODI1IDE1IDEzLjM3NSAxNUgxMS41QzEwLjExOSAxNSA5IDEzLjg4MSA5IDEyLjVIMTAuNUMxMC41IDEzLjA1MiAxMC45NDggMTMuNSAxMS41IDEzLjVIMTMuMzc1QzEzLjk5NiAxMy41IDE0LjUgMTIuOTk2IDE0LjUgMTIuMzc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSmallIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSmall';
}

export default RefIcon;
