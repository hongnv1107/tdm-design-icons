// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFilesSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11C2 12.105 2.895 13 4 13H10C11.105 13 12 12.105 12 11V4.25C12 3.73 11.792 3.231 11.422 2.865L9.072 0.543C8.72 0.195 8.245 0 7.75 0H4C2.895 0 2 0.895 2 2V11ZM4 11.5C3.724 11.5 3.5 11.276 3.5 11V2C3.5 1.724 3.724 1.5 4 1.5H7V4.25C7 4.664 7.336 5 7.75 5H10.5V11C10.5 11.276 10.276 11.5 10 11.5H4ZM9.93 3.5H8.5V2.087L9.93 3.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 16H11.75C13.545 16 15 14.545 15 12.75V5H13.5V12.75C13.5 13.717 12.717 14.5 11.75 14.5H7V16Z"/>
  </svg>
);

const aDSFilesIconDefinition = svgToIconDefinition(
  aDSFilesSvg,
  'ads-files'
);

/**![ADSFiles](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMTFDMiAxMi4xMDUgMi44OTUgMTMgNCAxM0gxMEMxMS4xMDUgMTMgMTIgMTIuMTA1IDEyIDExVjQuMjVDMTIgMy43MyAxMS43OTIgMy4yMzEgMTEuNDIyIDIuODY1TDkuMDcyIDAuNTQzQzguNzIgMC4xOTUgOC4yNDUgMCA3Ljc1IDBINEMyLjg5NSAwIDIgMC44OTUgMiAyVjExWk00IDExLjVDMy43MjQgMTEuNSAzLjUgMTEuMjc2IDMuNSAxMVYyQzMuNSAxLjcyNCAzLjcyNCAxLjUgNCAxLjVIN1Y0LjI1QzcgNC42NjQgNy4zMzYgNSA3Ljc1IDVIMTAuNVYxMUMxMC41IDExLjI3NiAxMC4yNzYgMTEuNSAxMCAxMS41SDRaTTkuOTMgMy41SDguNVYyLjA4N0w5LjkzIDMuNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMTZIMTEuNzVDMTMuNTQ1IDE2IDE1IDE0LjU0NSAxNSAxMi43NVY1SDEzLjVWMTIuNzVDMTMuNSAxMy43MTcgMTIuNzE3IDE0LjUgMTEuNzUgMTQuNUg3VjE2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFilesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFiles';
}

export default RefIcon;
