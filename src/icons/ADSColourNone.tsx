// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSColourNoneSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSColourNone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMC40NyAxLjUzTDE0LjQ3IDE1LjUzTDE1LjUzIDE0LjQ3TDEuNTMgMC40N0wwLjQ3IDEuNTNaIi8+PHBhdGggZD0iTTkuMzE4IDEyLjVMMTAuODE4IDE0SDRDMi44OTUgMTQgMiAxMy4xMDUgMiAxMlY1LjE4MkwzLjUgNi42ODJWMTJDMy41IDEyLjI3NiAzLjcyNCAxMi41IDQgMTIuNUg5LjMxOFoiLz48cGF0aCBkPSJNMTIgMkg1LjE4Mkw2LjY4MiAzLjVIMTJDMTIuMjc2IDMuNSAxMi41IDMuNzI0IDEyLjUgNFY5LjMxOEwxNCAxMC44MThWNEMxNCAyLjg5NSAxMy4xMDUgMiAxMiAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSColourNoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSColourNone';
}

export default RefIcon;
