// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExpandElementSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H15V2.5H3C2.724 2.5 2.5 2.724 2.5 3V15H1V3Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.482 8.417L4.607 5.667L5.643 4.583L8 6.837L10.357 4.583L11.393 5.667L8.518 8.417C8.228 8.694 7.772 8.694 7.482 8.417Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 12H4.5V10.5H15V12ZM15 15H4.5V13.5H15V15Z"/>
  </svg>
);

const aDSExpandElementIconDefinition = svgToIconDefinition(
  aDSExpandElementSvg,
  'ads-expand-element'
);

/**![ADSExpandElement](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTVWMi41SDNDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxNUgxVjNaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ4MiA4LjQxN0w0LjYwNyA1LjY2N0w1LjY0MyA0LjU4M0w4IDYuODM3TDEwLjM1NyA0LjU4M0wxMS4zOTMgNS42NjdMOC41MTggOC40MTdDOC4yMjggOC42OTQgNy43NzIgOC42OTQgNy40ODIgOC40MTdaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxMkg0LjVWMTAuNUgxNVYxMlpNMTUgMTVINC41VjEzLjVIMTVWMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExpandElementIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExpandElement';
}

export default RefIcon;
