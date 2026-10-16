// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSScorecardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5V16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8H14.5C14.5 4.41 11.59 1.5 8 1.5ZM12.326 5.48L7.326 11.48C7.184 11.651 6.973 11.75 6.75 11.75C6.527 11.75 6.316 11.651 6.174 11.48L3.674 8.48L4.826 7.52L6.75 9.828L11.174 4.52L12.326 5.48ZM10.437 14.028C12.067 13.368 13.368 12.067 14.028 10.437L15.418 11C14.606 13.006 13.006 14.606 11 15.418L10.437 14.028Z"/>
  </svg>
);

const aDSScorecardIconDefinition = svgToIconDefinition(
  aDSScorecardSvg,
  'ads-scorecard'
);

/**![ADSScorecard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMS41OSA0LjQxIDE0LjUgOCAxNC41VjE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhIMTQuNUMxNC41IDQuNDEgMTEuNTkgMS41IDggMS41Wk0xMi4zMjYgNS40OEw3LjMyNiAxMS40OEM3LjE4NCAxMS42NTEgNi45NzMgMTEuNzUgNi43NSAxMS43NUM2LjUyNyAxMS43NSA2LjMxNiAxMS42NTEgNi4xNzQgMTEuNDhMMy42NzQgOC40OEw0LjgyNiA3LjUyTDYuNzUgOS44MjhMMTEuMTc0IDQuNTJMMTIuMzI2IDUuNDhaTTEwLjQzNyAxNC4wMjhDMTIuMDY3IDEzLjM2OCAxMy4zNjggMTIuMDY3IDE0LjAyOCAxMC40MzdMMTUuNDE4IDExQzE0LjYwNiAxMy4wMDYgMTMuMDA2IDE0LjYwNiAxMSAxNS40MThMMTAuNDM3IDE0LjAyOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSScorecardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSScorecard';
}

export default RefIcon;
