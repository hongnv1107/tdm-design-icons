// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTerminalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3C14.5 2.758 14.329 2.556 14.101 2.51L14 2.5H2C1.724 2.5 1.5 2.724 1.5 3V13C1.5 13.276 1.724 13.5 2 13.5H14C14.276 13.5 14.5 13.276 14.5 13V3ZM16 13C16 14.105 15.105 15 14 15H2C0.895 15 0 14.105 0 13V3C0 1.895 0.895 1 2 1H14L14.204 1.011C15.213 1.113 16 1.964 16 3V13Z"/><path d="M4.28 4.721L7.03 7.471C7.323 7.764 7.323 8.238 7.03 8.531L4.28 11.281L3.22 10.221L5.439 8.001L3.22 5.781L4.28 4.721Z"/><path d="M12.5 9.5V11H8V9.5H12.5Z"/>
  </svg>
);

const aDSTerminalIconDefinition = svgToIconDefinition(
  aDSTerminalSvg,
  'ads-terminal'
);

/**![ADSTerminal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDNDMTQuNSAyLjc1OCAxNC4zMjkgMi41NTYgMTQuMTAxIDIuNTFMMTQgMi41SDJDMS43MjQgMi41IDEuNSAyLjcyNCAxLjUgM1YxM0MxLjUgMTMuMjc2IDEuNzI0IDEzLjUgMiAxMy41SDE0QzE0LjI3NiAxMy41IDE0LjUgMTMuMjc2IDE0LjUgMTNWM1pNMTYgMTNDMTYgMTQuMTA1IDE1LjEwNSAxNSAxNCAxNUgyQzAuODk1IDE1IDAgMTQuMTA1IDAgMTNWM0MwIDEuODk1IDAuODk1IDEgMiAxSDE0TDE0LjIwNCAxLjAxMUMxNS4yMTMgMS4xMTMgMTYgMS45NjQgMTYgM1YxM1oiLz48cGF0aCBkPSJNNC4yOCA0LjcyMUw3LjAzIDcuNDcxQzcuMzIzIDcuNzY0IDcuMzIzIDguMjM4IDcuMDMgOC41MzFMNC4yOCAxMS4yODFMMy4yMiAxMC4yMjFMNS40MzkgOC4wMDFMMy4yMiA1Ljc4MUw0LjI4IDQuNzIxWiIvPjxwYXRoIGQ9Ik0xMi41IDkuNVYxMUg4VjkuNUgxMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTerminalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTerminal';
}

export default RefIcon;
