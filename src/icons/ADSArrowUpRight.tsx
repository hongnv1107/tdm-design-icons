// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47 12.47L12.22 2.72L13.28 3.78L3.53 13.53L2.47 12.47Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4H5.75V2.5H12.75C13.164 2.5 13.5 2.836 13.5 3.25V10.25H12V4Z"/>
  </svg>
);

const aDSArrowUpRightIconDefinition = svgToIconDefinition(
  aDSArrowUpRightSvg,
  'ads-arrow-up-right'
);

/**![ADSArrowUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi40NyAxMi40N0wxMi4yMiAyLjcyTDEzLjI4IDMuNzhMMy41MyAxMy41M0wyLjQ3IDEyLjQ3WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNEg1Ljc1VjIuNUgxMi43NUMxMy4xNjQgMi41IDEzLjUgMi44MzYgMTMuNSAzLjI1VjEwLjI1SDEyVjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUpRight';
}

export default RefIcon;
