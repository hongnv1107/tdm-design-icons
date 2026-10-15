// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLozengeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 4.895 0.895 4 2 4H14C15.105 4 16 4.895 16 6V10C16 11.105 15.105 12 14 12H2C0.895 12 0 11.105 0 10V6ZM2 5.5C1.724 5.5 1.5 5.724 1.5 6V10C1.5 10.276 1.724 10.5 2 10.5H14C14.276 10.5 14.5 10.276 14.5 10V6C14.5 5.724 14.276 5.5 14 5.5H2ZM13 8.75H3V7.25H13V8.75Z"/>
  </svg>
);

const aDSLozengeIconDefinition = svgToIconDefinition(
  aDSLozengeSvg,
  'ads-lozenge'
);

/**![ADSLozenge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDQuODk1IDAuODk1IDQgMiA0SDE0QzE1LjEwNSA0IDE2IDQuODk1IDE2IDZWMTBDMTYgMTEuMTA1IDE1LjEwNSAxMiAxNCAxMkgyQzAuODk1IDEyIDAgMTEuMTA1IDAgMTBWNlpNMiA1LjVDMS43MjQgNS41IDEuNSA1LjcyNCAxLjUgNlYxMEMxLjUgMTAuMjc2IDEuNzI0IDEwLjUgMiAxMC41SDE0QzE0LjI3NiAxMC41IDE0LjUgMTAuMjc2IDE0LjUgMTBWNkMxNC41IDUuNzI0IDE0LjI3NiA1LjUgMTQgNS41SDJaTTEzIDguNzVIM1Y3LjI1SDEzVjguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLozengeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLozenge';
}

export default RefIcon;
