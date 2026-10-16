// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingThreeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5H14.625C15.384 8.5 16 9.116 16 9.875V14.625C16 15.384 15.384 16 14.625 16H11.5V14.5H14.5V13H11.5V11.5H14.5V10H11.5V8.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingThreeIconDefinition = svgToIconDefinition(
  aDSTextHeadingThreeSvg,
  'ads-text-heading-three'
);

/**![ADSTextHeadingThree](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNSA4LjVIMTQuNjI1QzE1LjM4NCA4LjUgMTYgOS4xMTYgMTYgOS44NzVWMTQuNjI1QzE2IDE1LjM4NCAxNS4zODQgMTYgMTQuNjI1IDE2SDExLjVWMTQuNUgxNC41VjEzSDExLjVWMTEuNUgxNC41VjEwSDExLjVWOC41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDYuMjVWMUgxVjEzSDIuNVY3Ljc1SDhWMTNIOS41VjFIOFY2LjI1SDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingThreeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingThree';
}

export default RefIcon;
