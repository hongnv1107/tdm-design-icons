// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSprintSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C5.377 1.5 3.25 3.627 3.25 6.25C3.25 8.873 5.377 11 8 11H13.439L11.22 8.78L12.28 7.72L15.78 11.22C16.073 11.513 16.073 11.987 15.78 12.28L12.28 15.78L11.22 14.72L13.439 12.5H0V11H3.938C2.599 9.854 1.75 8.151 1.75 6.25C1.75 2.798 4.548 0 8 0C11.452 0 14.25 2.798 14.25 6.25H12.75C12.75 3.627 10.623 1.5 8 1.5Z"/>
  </svg>
);

const aDSSprintIconDefinition = svgToIconDefinition(
  aDSSprintSvg,
  'ads-sprint'
);

/**![ADSSprint](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNS4zNzcgMS41IDMuMjUgMy42MjcgMy4yNSA2LjI1QzMuMjUgOC44NzMgNS4zNzcgMTEgOCAxMUgxMy40MzlMMTEuMjIgOC43OEwxMi4yOCA3LjcyTDE1Ljc4IDExLjIyQzE2LjA3MyAxMS41MTMgMTYuMDczIDExLjk4NyAxNS43OCAxMi4yOEwxMi4yOCAxNS43OEwxMS4yMiAxNC43MkwxMy40MzkgMTIuNUgwVjExSDMuOTM4QzIuNTk5IDkuODU0IDEuNzUgOC4xNTEgMS43NSA2LjI1QzEuNzUgMi43OTggNC41NDggMCA4IDBDMTEuNDUyIDAgMTQuMjUgMi43OTggMTQuMjUgNi4yNUgxMi43NUMxMi43NSAzLjYyNyAxMC42MjMgMS41IDggMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSprintIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSprint';
}

export default RefIcon;
