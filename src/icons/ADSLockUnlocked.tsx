// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLockUnlockedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C6.619 1.5 5.5 2.619 5.5 4V7H12C13.105 7 14 7.895 14 9V14C14 15.105 13.105 16 12 16H4C2.895 16 2 15.105 2 14V9C2 7.895 2.895 7 4 7V4C4 1.791 5.791 0 8 0C10.209 0 12 1.791 12 4H10.5C10.5 2.619 9.381 1.5 8 1.5ZM4 8.5C3.724 8.5 3.5 8.724 3.5 9V14C3.5 14.276 3.724 14.5 4 14.5H12C12.276 14.5 12.5 14.276 12.5 14V9C12.5 8.724 12.276 8.5 12 8.5H4Z"/>
  </svg>
);

const aDSLockUnlockedIconDefinition = svgToIconDefinition(
  aDSLockUnlockedSvg,
  'ads-lock-unlocked'
);

/**![ADSLockUnlocked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNi42MTkgMS41IDUuNSAyLjYxOSA1LjUgNFY3SDEyQzEzLjEwNSA3IDE0IDcuODk1IDE0IDlWMTRDMTQgMTUuMTA1IDEzLjEwNSAxNiAxMiAxNkg0QzIuODk1IDE2IDIgMTUuMTA1IDIgMTRWOUMyIDcuODk1IDIuODk1IDcgNCA3VjRDNCAxLjc5MSA1Ljc5MSAwIDggMEMxMC4yMDkgMCAxMiAxLjc5MSAxMiA0SDEwLjVDMTAuNSAyLjYxOSA5LjM4MSAxLjUgOCAxLjVaTTQgOC41QzMuNzI0IDguNSAzLjUgOC43MjQgMy41IDlWMTRDMy41IDE0LjI3NiAzLjcyNCAxNC41IDQgMTQuNUgxMkMxMi4yNzYgMTQuNSAxMi41IDE0LjI3NiAxMi41IDE0VjlDMTIuNSA4LjcyNCAxMi4yNzYgOC41IDEyIDguNUg0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLockUnlockedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLockUnlocked';
}

export default RefIcon;
