// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLibrarySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.5H3V1H13V2.5ZM1 6C1 4.895 1.895 4 3 4H13C14.105 4 15 4.895 15 6V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V6ZM3 5.5C2.724 5.5 2.5 5.724 2.5 6V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V6C13.5 5.724 13.276 5.5 13 5.5H3ZM11 8.5H5V7H11V8.5Z"/>
  </svg>
);

const aDSLibraryIconDefinition = svgToIconDefinition(
  aDSLibrarySvg,
  'ads-library'
);

/**![ADSLibrary](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMi41SDNWMUgxM1YyLjVaTTEgNkMxIDQuODk1IDEuODk1IDQgMyA0SDEzQzE0LjEwNSA0IDE1IDQuODk1IDE1IDZWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWNlpNMyA1LjVDMi43MjQgNS41IDIuNSA1LjcyNCAyLjUgNlYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWNkMxMy41IDUuNzI0IDEzLjI3NiA1LjUgMTMgNS41SDNaTTExIDguNUg1VjdIMTFWOC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLibraryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLibrary';
}

export default RefIcon;
