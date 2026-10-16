// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLozengeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 4.895 0.895 4 2 4H14C15.105 4 16 4.895 16 6V10C16 11.105 15.105 12 14 12H2C0.895 12 0 11.105 0 10V6ZM2 5.5C1.724 5.5 1.5 5.724 1.5 6V10C1.5 10.276 1.724 10.5 2 10.5H14C14.276 10.5 14.5 10.276 14.5 10V6C14.5 5.724 14.276 5.5 14 5.5H2ZM13 8.75H3V7.25H13V8.75Z"/>
  </svg>
);

const aDSLozengeIconDefinition = svgToIconDefinition(
  aDSLozengeSvg,
  'ads-lozenge'
);

/**![ADSLozenge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA2QzAgNC44OTUgMC44OTUgNCAyIDRIMTRDMTUuMTA1IDQgMTYgNC44OTUgMTYgNlYxMEMxNiAxMS4xMDUgMTUuMTA1IDEyIDE0IDEySDJDMC44OTUgMTIgMCAxMS4xMDUgMCAxMFY2Wk0yIDUuNUMxLjcyNCA1LjUgMS41IDUuNzI0IDEuNSA2VjEwQzEuNSAxMC4yNzYgMS43MjQgMTAuNSAyIDEwLjVIMTRDMTQuMjc2IDEwLjUgMTQuNSAxMC4yNzYgMTQuNSAxMFY2QzE0LjUgNS43MjQgMTQuMjc2IDUuNSAxNCA1LjVIMlpNMTMgOC43NUgzVjcuMjVIMTNWOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLozengeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLozenge';
}

export default RefIcon;
