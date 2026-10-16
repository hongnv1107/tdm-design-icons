// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSOfficeBuildingSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V14.5H15V16H1V14.5H2V2ZM3.5 14.5H5.5V10.75C5.5 10.336 5.836 10 6.25 10H9.75C10.164 10 10.5 10.336 10.5 10.75V14.5H12.5V2C12.5 1.724 12.276 1.5 12 1.5H4C3.724 1.5 3.5 1.724 3.5 2V14.5ZM9 14.5V11.5H7V14.5H9ZM7 4.5H5V3H7V4.5ZM11 4.5H9V3H11V4.5ZM5 6H7V7.5H5V6ZM9 6H11V7.5H9V6Z"/>
  </svg>
);

const aDSOfficeBuildingIconDefinition = svgToIconDefinition(
  aDSOfficeBuildingSvg,
  'ads-office-building'
);

/**![ADSOfficeBuilding](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyQzIgMC44OTUgMi44OTUgMCA0IDBIMTJDMTMuMTA1IDAgMTQgMC44OTUgMTQgMlYxNC41SDE1VjE2SDFWMTQuNUgyVjJaTTMuNSAxNC41SDUuNVYxMC43NUM1LjUgMTAuMzM2IDUuODM2IDEwIDYuMjUgMTBIOS43NUMxMC4xNjQgMTAgMTAuNSAxMC4zMzYgMTAuNSAxMC43NVYxNC41SDEyLjVWMkMxMi41IDEuNzI0IDEyLjI3NiAxLjUgMTIgMS41SDRDMy43MjQgMS41IDMuNSAxLjcyNCAzLjUgMlYxNC41Wk05IDE0LjVWMTEuNUg3VjE0LjVIOVpNNyA0LjVINVYzSDdWNC41Wk0xMSA0LjVIOVYzSDExVjQuNVpNNSA2SDdWNy41SDVWNlpNOSA2SDExVjcuNUg5VjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSOfficeBuildingIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSOfficeBuilding';
}

export default RefIcon;
