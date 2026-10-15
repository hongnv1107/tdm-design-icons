// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSViewSplitSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3C14.5 2.724 14.276 2.5 14 2.5H8.75V13.5H14C14.276 13.5 14.5 13.276 14.5 13V3ZM1.5 13C1.5 13.276 1.724 13.5 2 13.5H7.25V2.5H2C1.724 2.5 1.5 2.724 1.5 3V13ZM16 13C16 14.105 15.105 15 14 15H2C0.895 15 0 14.105 0 13V3C0 1.895 0.895 1 2 1H14C15.105 1 16 1.895 16 3V13Z"/>
  </svg>
);

const aDSViewSplitIconDefinition = svgToIconDefinition(
  aDSViewSplitSvg,
  'ads-view-split'
);

/**![ADSViewSplit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzQzE0LjUgMi43MjQgMTQuMjc2IDIuNSAxNCAyLjVIOC43NVYxMy41SDE0QzE0LjI3NiAxMy41IDE0LjUgMTMuMjc2IDE0LjUgMTNWM1pNMS41IDEzQzEuNSAxMy4yNzYgMS43MjQgMTMuNSAyIDEzLjVINy4yNVYyLjVIMkMxLjcyNCAyLjUgMS41IDIuNzI0IDEuNSAzVjEzWk0xNiAxM0MxNiAxNC4xMDUgMTUuMTA1IDE1IDE0IDE1SDJDMC44OTUgMTUgMCAxNC4xMDUgMCAxM1YzQzAgMS44OTUgMC44OTUgMSAyIDFIMTRDMTUuMTA1IDEgMTYgMS44OTUgMTYgM1YxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSViewSplitIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSViewSplit';
}

export default RefIcon;
