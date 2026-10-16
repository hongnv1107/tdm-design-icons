// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRoadmapSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.895 0.895 2 2 2H11C12.105 2 13 2.895 13 4V5C13 6.105 12.105 7 11 7H2C0.895 7 0 6.105 0 5V4ZM2 3.5C1.724 3.5 1.5 3.724 1.5 4V5C1.5 5.276 1.724 5.5 2 5.5H11C11.276 5.5 11.5 5.276 11.5 5V4C11.5 3.724 11.276 3.5 11 3.5H2ZM3 11C3 9.895 3.895 9 5 9H14C15.105 9 16 9.895 16 11V12C16 13.105 15.105 14 14 14H5C3.895 14 3 13.105 3 12V11ZM5 10.5C4.724 10.5 4.5 10.724 4.5 11V12C4.5 12.276 4.724 12.5 5 12.5H14C14.276 12.5 14.5 12.276 14.5 12V11C14.5 10.724 14.276 10.5 14 10.5H5Z"/>
  </svg>
);

const aDSRoadmapIconDefinition = svgToIconDefinition(
  aDSRoadmapSvg,
  'ads-roadmap'
);

/**![ADSRoadmap](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNEMwIDIuODk1IDAuODk1IDIgMiAySDExQzEyLjEwNSAyIDEzIDIuODk1IDEzIDRWNUMxMyA2LjEwNSAxMi4xMDUgNyAxMSA3SDJDMC44OTUgNyAwIDYuMTA1IDAgNVY0Wk0yIDMuNUMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjVDMS41IDUuMjc2IDEuNzI0IDUuNSAyIDUuNUgxMUMxMS4yNzYgNS41IDExLjUgNS4yNzYgMTEuNSA1VjRDMTEuNSAzLjcyNCAxMS4yNzYgMy41IDExIDMuNUgyWk0zIDExQzMgOS44OTUgMy44OTUgOSA1IDlIMTRDMTUuMTA1IDkgMTYgOS44OTUgMTYgMTFWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEg1QzMuODk1IDE0IDMgMTMuMTA1IDMgMTJWMTFaTTUgMTAuNUM0LjcyNCAxMC41IDQuNSAxMC43MjQgNC41IDExVjEyQzQuNSAxMi4yNzYgNC43MjQgMTIuNSA1IDEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlYxMUMxNC41IDEwLjcyNCAxNC4yNzYgMTAuNSAxNCAxMC41SDVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRoadmapIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRoadmap';
}

export default RefIcon;
