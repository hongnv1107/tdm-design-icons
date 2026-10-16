// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFlagFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.75C2 1.336 2.336 1 2.75 1H14C14.284 1 14.544 1.161 14.671 1.415C14.798 1.669 14.77 1.973 14.6 2.2L11.938 5.75L14.6 9.3C14.77 9.527 14.798 9.831 14.671 10.085C14.544 10.34 14.284 10.5 14 10.5H3.5V15H2V1.75Z"/>
  </svg>
);

const aDSFlagFilledIconDefinition = svgToIconDefinition(
  aDSFlagFilledSvg,
  'ads-flag-filled'
);

/**![ADSFlagFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAxLjc1QzIgMS4zMzYgMi4zMzYgMSAyLjc1IDFIMTRDMTQuMjg0IDEgMTQuNTQ0IDEuMTYxIDE0LjY3MSAxLjQxNUMxNC43OTggMS42NjkgMTQuNzcgMS45NzMgMTQuNiAyLjJMMTEuOTM4IDUuNzVMMTQuNiA5LjNDMTQuNzcgOS41MjcgMTQuNzk4IDkuODMxIDE0LjY3MSAxMC4wODVDMTQuNTQ0IDEwLjM0IDE0LjI4NCAxMC41IDE0IDEwLjVIMy41VjE1SDJWMS43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFlagFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFlagFilled';
}

export default RefIcon;
