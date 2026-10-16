// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowEndSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.78 7.47C13.073 7.763 13.073 8.237 12.78 8.53L8.28 13.03L7.22 11.97L10.44 8.75H0V7.25H10.44L7.22 4.03L8.28 2.97L12.78 7.47ZM16 3V13H14.5V3H16Z"/>
  </svg>
);

const aDSArrowEndIconDefinition = svgToIconDefinition(
  aDSArrowEndSvg,
  'ads-arrow-end'
);

/**![ADSArrowEnd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi43OCA3LjQ3QzEzLjA3MyA3Ljc2MyAxMy4wNzMgOC4yMzcgMTIuNzggOC41M0w4LjI4IDEzLjAzTDcuMjIgMTEuOTdMMTAuNDQgOC43NUgwVjcuMjVIMTAuNDRMNy4yMiA0LjAzTDguMjggMi45N0wxMi43OCA3LjQ3Wk0xNiAzVjEzSDE0LjVWM0gxNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowEndIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowEnd';
}

export default RefIcon;
