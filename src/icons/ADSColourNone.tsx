// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSColourNoneSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.47 1.53L14.47 15.53L15.53 14.47L1.53 0.47L0.47 1.53Z"/><path d="M9.318 12.5L10.818 14H4C2.895 14 2 13.105 2 12V5.182L3.5 6.682V12C3.5 12.276 3.724 12.5 4 12.5H9.318Z"/><path d="M12 2H5.182L6.682 3.5H12C12.276 3.5 12.5 3.724 12.5 4V9.318L14 10.818V4C14 2.895 13.105 2 12 2Z"/>
  </svg>
);

const aDSColourNoneIconDefinition = svgToIconDefinition(
  aDSColourNoneSvg,
  'ads-colour-none'
);

/**![ADSColourNone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0wLjQ3IDEuNTNMMTQuNDcgMTUuNTNMMTUuNTMgMTQuNDdMMS41MyAwLjQ3TDAuNDcgMS41M1oiLz48cGF0aCBkPSJNOS4zMTggMTIuNUwxMC44MTggMTRINEMyLjg5NSAxNCAyIDEzLjEwNSAyIDEyVjUuMTgyTDMuNSA2LjY4MlYxMkMzLjUgMTIuMjc2IDMuNzI0IDEyLjUgNCAxMi41SDkuMzE4WiIvPjxwYXRoIGQ9Ik0xMiAySDUuMTgyTDYuNjgyIDMuNUgxMkMxMi4yNzYgMy41IDEyLjUgMy43MjQgMTIuNSA0VjkuMzE4TDE0IDEwLjgxOFY0QzE0IDIuODk1IDEzLjEwNSAyIDEyIDJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSColourNoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSColourNone';
}

export default RefIcon;
