// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSmartLinkInlineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C1.724 6.5 1.5 6.724 1.5 7V9C1.5 9.276 1.724 9.5 2 9.5H4.5V6.5H2ZM6 6.5V9.5H14C14.276 9.5 14.5 9.276 14.5 9V7C14.5 6.724 14.276 6.5 14 6.5H6ZM0 7C0 5.895 0.895 5 2 5H14C15.105 5 16 5.895 16 7V9C16 10.105 15.105 11 14 11H2C0.895 11 0 10.105 0 9V7Z"/>
  </svg>
);

const aDSSmartLinkInlineIconDefinition = svgToIconDefinition(
  aDSSmartLinkInlineSvg,
  'ads-smart-link-inline'
);

/**![ADSSmartLinkInline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiA2LjVDMS43MjQgNi41IDEuNSA2LjcyNCAxLjUgN1Y5QzEuNSA5LjI3NiAxLjcyNCA5LjUgMiA5LjVINC41VjYuNUgyWk02IDYuNVY5LjVIMTRDMTQuMjc2IDkuNSAxNC41IDkuMjc2IDE0LjUgOVY3QzE0LjUgNi43MjQgMTQuMjc2IDYuNSAxNCA2LjVINlpNMCA3QzAgNS44OTUgMC44OTUgNSAyIDVIMTRDMTUuMTA1IDUgMTYgNS44OTUgMTYgN1Y5QzE2IDEwLjEwNSAxNS4xMDUgMTEgMTQgMTFIMkMwLjg5NSAxMSAwIDEwLjEwNSAwIDlWN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSmartLinkInlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSmartLinkInline';
}

export default RefIcon;
