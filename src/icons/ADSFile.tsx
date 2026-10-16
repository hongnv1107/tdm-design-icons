// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFileSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 15.105 2.895 16 4 16H12C13.105 16 14 15.105 14 14V5.25C14 4.731 13.794 4.233 13.427 3.866L10.134 0.573C9.767 0.206 9.269 0 8.75 0H4C2.895 0 2 0.895 2 2V14ZM4 14.5C3.724 14.5 3.5 14.276 3.5 14V2C3.5 1.724 3.724 1.5 4 1.5H8V5.25C8 5.664 8.336 6 8.75 6H12.5V14C12.5 14.276 12.276 14.5 12 14.5H4ZM11.939 4.5H9.5V2.061L11.939 4.5Z"/>
  </svg>
);

const aDSFileIconDefinition = svgToIconDefinition(
  aDSFileSvg,
  'ads-file'
);

/**![ADSFile](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMTRDMiAxNS4xMDUgMi44OTUgMTYgNCAxNkgxMkMxMy4xMDUgMTYgMTQgMTUuMTA1IDE0IDE0VjUuMjVDMTQgNC43MzEgMTMuNzk0IDQuMjMzIDEzLjQyNyAzLjg2NkwxMC4xMzQgMC41NzNDOS43NjcgMC4yMDYgOS4yNjkgMCA4Ljc1IDBINEMyLjg5NSAwIDIgMC44OTUgMiAyVjE0Wk00IDE0LjVDMy43MjQgMTQuNSAzLjUgMTQuMjc2IDMuNSAxNFYyQzMuNSAxLjcyNCAzLjcyNCAxLjUgNCAxLjVIOFY1LjI1QzggNS42NjQgOC4zMzYgNiA4Ljc1IDZIMTIuNVYxNEMxMi41IDE0LjI3NiAxMi4yNzYgMTQuNSAxMiAxNC41SDRaTTExLjkzOSA0LjVIOS41VjIuMDYxTDExLjkzOSA0LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFileIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFile';
}

export default RefIcon;
