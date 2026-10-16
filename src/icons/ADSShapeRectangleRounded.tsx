// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeRectangleRoundedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.75C1.5 2.955 2.955 1.5 4.75 1.5H11.25C13.045 1.5 14.5 2.955 14.5 4.75V11.25C14.5 13.045 13.045 14.5 11.25 14.5H4.75C2.955 14.5 1.5 13.045 1.5 11.25V4.75ZM4.75 3C3.784 3 3 3.784 3 4.75V11.25C3 12.217 3.784 13 4.75 13H11.25C12.217 13 13 12.217 13 11.25V4.75C13 3.784 12.217 3 11.25 3H4.75Z"/>
  </svg>
);

const aDSShapeRectangleRoundedIconDefinition = svgToIconDefinition(
  aDSShapeRectangleRoundedSvg,
  'ads-shape-rectangle-rounded'
);

/**![ADSShapeRectangleRounded](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41IDQuNzVDMS41IDIuOTU1IDIuOTU1IDEuNSA0Ljc1IDEuNUgxMS4yNUMxMy4wNDUgMS41IDE0LjUgMi45NTUgMTQuNSA0Ljc1VjExLjI1QzE0LjUgMTMuMDQ1IDEzLjA0NSAxNC41IDExLjI1IDE0LjVINC43NUMyLjk1NSAxNC41IDEuNSAxMy4wNDUgMS41IDExLjI1VjQuNzVaTTQuNzUgM0MzLjc4NCAzIDMgMy43ODQgMyA0Ljc1VjExLjI1QzMgMTIuMjE3IDMuNzg0IDEzIDQuNzUgMTNIMTEuMjVDMTIuMjE3IDEzIDEzIDEyLjIxNyAxMyAxMS4yNVY0Ljc1QzEzIDMuNzg0IDEyLjIxNyAzIDExLjI1IDNINC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeRectangleRoundedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeRectangleRounded';
}

export default RefIcon;
