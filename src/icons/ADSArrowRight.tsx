// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.439 7.25L8.72 3.53L9.78 2.47L14.78 7.47C15.073 7.763 15.073 8.237 14.78 8.53L9.78 13.53L8.72 12.47L12.439 8.75L1 8.75V7.25L12.439 7.25Z"/>
  </svg>
);

const aDSArrowRightIconDefinition = svgToIconDefinition(
  aDSArrowRightSvg,
  'ads-arrow-right'
);

/**![ADSArrowRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNDM5IDcuMjVMOC43MiAzLjUzTDkuNzggMi40N0wxNC43OCA3LjQ3QzE1LjA3MyA3Ljc2MyAxNS4wNzMgOC4yMzcgMTQuNzggOC41M0w5Ljc4IDEzLjUzTDguNzIgMTIuNDdMMTIuNDM5IDguNzVMMSA4Ljc1VjcuMjVMMTIuNDM5IDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowRight';
}

export default RefIcon;
