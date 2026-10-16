// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPanelSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.5C14.276 3.5 14.5 3.724 14.5 4V12C14.5 12.276 14.276 12.5 14 12.5H2C1.724 12.5 1.5 12.276 1.5 12V4C1.5 3.724 1.724 3.5 2 3.5H14ZM16 4C16 2.895 15.105 2 14 2H2C0.895 2 0 2.895 0 4V12C0 13.105 0.895 14 2 14H14C15.105 14 16 13.105 16 12V4ZM8 5.5H3V7H8V5.5ZM13 10.5V9H3V10.5H13Z"/>
  </svg>
);

const aDSPanelIconDefinition = svgToIconDefinition(
  aDSPanelSvg,
  'ads-panel'
);

/**![ADSPanel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMy41QzE0LjI3NiAzLjUgMTQuNSAzLjcyNCAxNC41IDRWMTJDMTQuNSAxMi4yNzYgMTQuMjc2IDEyLjUgMTQgMTIuNUgyQzEuNzI0IDEyLjUgMS41IDEyLjI3NiAxLjUgMTJWNEMxLjUgMy43MjQgMS43MjQgMy41IDIgMy41SDE0Wk0xNiA0QzE2IDIuODk1IDE1LjEwNSAyIDE0IDJIMkMwLjg5NSAyIDAgMi44OTUgMCA0VjEyQzAgMTMuMTA1IDAuODk1IDE0IDIgMTRIMTRDMTUuMTA1IDE0IDE2IDEzLjEwNSAxNiAxMlY0Wk04IDUuNUgzVjdIOFY1LjVaTTEzIDEwLjVWOUgzVjEwLjVIMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPanelIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPanel';
}

export default RefIcon;
