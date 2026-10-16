// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageInlineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.375C0 5.616 0.616 5 1.375 5H4.625C5.384 5 6 5.616 6 6.375V9.625C6 10.384 5.384 11 4.625 11H1.375C0.616 11 0 10.384 0 9.625V6.375ZM1.5 6.5V9.5H4.5V6.5H1.5ZM16 8.75H8V7.25H16V8.75Z"/>
  </svg>
);

const aDSImageInlineIconDefinition = svgToIconDefinition(
  aDSImageInlineSvg,
  'ads-image-inline'
);

/**![ADSImageInline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA2LjM3NUMwIDUuNjE2IDAuNjE2IDUgMS4zNzUgNUg0LjYyNUM1LjM4NCA1IDYgNS42MTYgNiA2LjM3NVY5LjYyNUM2IDEwLjM4NCA1LjM4NCAxMSA0LjYyNSAxMUgxLjM3NUMwLjYxNiAxMSAwIDEwLjM4NCAwIDkuNjI1VjYuMzc1Wk0xLjUgNi41VjkuNUg0LjVWNi41SDEuNVpNMTYgOC43NUg4VjcuMjVIMTZWOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageInlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImageInline';
}

export default RefIcon;
