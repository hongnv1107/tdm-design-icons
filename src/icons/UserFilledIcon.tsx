// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const userFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14C17.7614 14 20 16.2386 20 19V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V19C4 16.2386 6.23858 14 9 14H15Z"/><path d="M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"/>
  </svg>
);

const userFilledIconDefinition = svgToIconDefinition(
  userFilledSvg,
  'user-filled'
);

/**![UserFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDE0QzE3Ljc2MTQgMTQgMjAgMTYuMjM4NiAyMCAxOVYyMEMyMCAyMC41NTIzIDE5LjU1MjMgMjEgMTkgMjFINUM0LjQ0NzcyIDIxIDQgMjAuNTUyMyA0IDIwVjE5QzQgMTYuMjM4NiA2LjIzODU4IDE0IDkgMTRIMTVaIi8+PHBhdGggZD0iTTE2LjUgNy41QzE2LjUgOS45ODUyOCAxNC40ODUzIDEyIDEyIDEyQzkuNTE0NzIgMTIgNy41IDkuOTg1MjggNy41IDcuNUM3LjUgNS4wMTQ3MiA5LjUxNDcyIDMgMTIgM0MxNC40ODUzIDMgMTYuNSA1LjAxNDcyIDE2LjUgNy41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={userFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserFilledIcon';
}

export default RefIcon;
