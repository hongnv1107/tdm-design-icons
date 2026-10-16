// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDividerElementSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 15L14 12.5C14 11.395 13.105 10.5 12 10.5H4C2.895 10.5 2 11.395 2 12.5L2 15H3.5L3.5 12.5C3.5 12.224 3.724 12 4 12H12C12.276 12 12.5 12.224 12.5 12.5L12.5 15L14 15ZM16 7.25H0V8.75H16V7.25ZM2 3.501C2 4.606 2.896 5.5 4 5.5H12C13.105 5.5 14 4.605 14 3.5L14 1L12.5 1L12.5 3.5C12.5 3.776 12.276 4 12 4H4C3.723 4 3.5 3.776 3.5 3.501V1H2V3.501Z"/>
  </svg>
);

const aDSDividerElementIconDefinition = svgToIconDefinition(
  aDSDividerElementSvg,
  'ads-divider-element'
);

/**![ADSDividerElement](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMTVMMTQgMTIuNUMxNCAxMS4zOTUgMTMuMTA1IDEwLjUgMTIgMTAuNUg0QzIuODk1IDEwLjUgMiAxMS4zOTUgMiAxMi41TDIgMTVIMy41TDMuNSAxMi41QzMuNSAxMi4yMjQgMy43MjQgMTIgNCAxMkgxMkMxMi4yNzYgMTIgMTIuNSAxMi4yMjQgMTIuNSAxMi41TDEyLjUgMTVMMTQgMTVaTTE2IDcuMjVIMFY4Ljc1SDE2VjcuMjVaTTIgMy41MDFDMiA0LjYwNiAyLjg5NiA1LjUgNCA1LjVIMTJDMTMuMTA1IDUuNSAxNCA0LjYwNSAxNCAzLjVMMTQgMUwxMi41IDFMMTIuNSAzLjVDMTIuNSAzLjc3NiAxMi4yNzYgNCAxMiA0SDRDMy43MjMgNCAzLjUgMy43NzYgMy41IDMuNTAxVjFIMlYzLjUwMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDividerElementIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDividerElement';
}

export default RefIcon;
