// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBoardSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H4.833V3.5H2ZM6.333 3.5V12.5H9.667V3.5H6.333ZM11.167 3.5V12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5H11.167ZM0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12L0 4Z"/>
  </svg>
);

const aDSBoardIconDefinition = svgToIconDefinition(
  aDSBoardSvg,
  'ads-board'
);

/**![ADSBoard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzLjVDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDQuODMzVjMuNUgyWk02LjMzMyAzLjVWMTIuNUg5LjY2N1YzLjVINi4zMzNaTTExLjE2NyAzLjVWMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUgxMS4xNjdaTTAgNEMwIDIuODk1IDAuODk1IDIgMiAySDE0QzE1LjEwNSAyIDE2IDIuODk1IDE2IDRWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJMMCA0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBoardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoard';
}

export default RefIcon;
