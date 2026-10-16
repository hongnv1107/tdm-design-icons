// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.03 1.47L12.03 7.47C12.305 7.744 12.322 8.179 12.082 8.474L12.03 8.53L6.03 14.53L4.97 13.47L10.44 8L4.97 2.53L6.03 1.47Z"/>
  </svg>
);

const aDSChevronRightIconDefinition = svgToIconDefinition(
  aDSChevronRightSvg,
  'ads-chevron-right'
);

/**![ADSChevronRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjAzIDEuNDdMMTIuMDMgNy40N0MxMi4zMDUgNy43NDQgMTIuMzIyIDguMTc5IDEyLjA4MiA4LjQ3NEwxMi4wMyA4LjUzTDYuMDMgMTQuNTNMNC45NyAxMy40N0wxMC40NCA4TDQuOTcgMi41M0w2LjAzIDEuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronRight';
}

export default RefIcon;
