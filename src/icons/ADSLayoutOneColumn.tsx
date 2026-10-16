// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLayoutOneColumnSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H14.625C15.384 1 16 1.616 16 2.375V13.625C16 14.384 15.384 15 14.625 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H14.5V2.5H1.5Z"/>
  </svg>
);

const aDSLayoutOneColumnIconDefinition = svgToIconDefinition(
  aDSLayoutOneColumnSvg,
  'ads-layout-one-column'
);

/**![ADSLayoutOneColumn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjM3NUMwIDEuNjE2IDAuNjE2IDEgMS4zNzUgMUgxNC42MjVDMTUuMzg0IDEgMTYgMS42MTYgMTYgMi4zNzVWMTMuNjI1QzE2IDE0LjM4NCAxNS4zODQgMTUgMTQuNjI1IDE1SDEuMzc1QzAuNjE2IDE1IDAgMTQuMzg0IDAgMTMuNjI1VjIuMzc1Wk0xLjUgMi41VjEzLjVIMTQuNVYyLjVIMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLayoutOneColumnIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLayoutOneColumn';
}

export default RefIcon;
