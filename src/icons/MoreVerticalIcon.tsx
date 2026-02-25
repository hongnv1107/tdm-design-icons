// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moreVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z" />
  </svg>
);

const moreVerticalIconDefinition = svgToIconDefinition(
  moreVerticalSvg,
  'more-vertical'
);

/**![MoreVerticalIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTlDMTAgMTcuODk1NCAxMC44OTU0IDE3IDEyIDE3QzEzLjEwNDYgMTcgMTQgMTcuODk1NCAxNCAxOUMxNCAyMC4xMDQ2IDEzLjEwNDYgMjEgMTIgMjFDMTAuODk1NCAyMSAxMCAyMC4xMDQ2IDEwIDE5Wk0xMCAxMkMxMCAxMC44OTU0IDEwLjg5NTQgMTAgMTIgMTBDMTMuMTA0NiAxMCAxNCAxMC44OTU0IDE0IDEyQzE0IDEzLjEwNDYgMTMuMTA0NiAxNCAxMiAxNEMxMC44OTU0IDE0IDEwIDEzLjEwNDYgMTAgMTJaTTEwIDVDMTAgMy44OTU0MyAxMC44OTU0IDMgMTIgM0MxMy4xMDQ2IDMgMTQgMy44OTU0MyAxNCA1QzE0IDYuMTA0NTcgMTMuMTA0NiA3IDEyIDdDMTAuODk1NCA3IDEwIDYuMTA0NTcgMTAgNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moreVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoreVerticalIcon';
}

export default RefIcon;
