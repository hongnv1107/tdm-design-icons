// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPresenterModeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSPresenterMode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC45MDkgMi41QzMuNTc4IDIuNSAyLjUgMy41NzggMi41IDQuOTA5QzIuNSA1Ljg2IDMuMDUxIDYuNjg0IDMuODU1IDcuMDc2TDMuMTk4IDguNDI0QzEuODk4IDcuNzkgMSA2LjQ1NSAxIDQuOTA5QzEgMi43NSAyLjc1IDEgNC45MDkgMUM2LjQ1NSAxIDcuNzkxIDEuODk4IDguNDI0IDMuMTk4TDcuMDc2IDMuODU1QzYuNjg0IDMuMDUxIDUuODYgMi41IDQuOTA5IDIuNVpNNC43MiA0LjcyQzQuOTI2IDQuNTE0IDUuMjMxIDQuNDQ2IDUuNTA1IDQuNTQ1TDE0LjUwNSA3Ljc5NUMxNC43OTggNy45MDEgMTQuOTk2IDguMTc3IDE1IDguNDg5QzE1LjAwNSA4LjgwMSAxNC44MTUgOS4wODMgMTQuNTI1IDkuMTk4TDEwLjcwNCAxMC43MDNMOS4xOTggMTQuNTI1QzkuMDg0IDE0LjgxNSA4LjgwMSAxNS4wMDQgOC40ODkgMTVDOC4xNzcgMTQuOTk1IDcuOTAxIDE0Ljc5OCA3Ljc5NSAxNC41MDVMNC41NDUgNS41MDVDNC40NDYgNS4yMzEgNC41MTQgNC45MjUgNC43MiA0LjcyWk02LjQ5OCA2LjQ5OEw4LjUzMSAxMi4xMjZMOS40MjcgOS44NUM5LjUwNCA5LjY1NyA5LjY1NyA5LjUwMyA5Ljg1IDkuNDI3TDEyLjEyNyA4LjUzMUw2LjQ5OCA2LjQ5OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPresenterModeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPresenterMode';
}

export default RefIcon;
