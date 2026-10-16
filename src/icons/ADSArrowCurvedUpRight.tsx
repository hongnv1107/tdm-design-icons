// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 10C2.5 8.343 3.843 7 5.5 7H12.44L9.22 10.22L10.28 11.28L14.78 6.78C14.921 6.64 15 6.449 15 6.25C15 6.051 14.921 5.86 14.78 5.72L10.28 1.22L9.22 2.28L12.44 5.5H5.5C3.015 5.5 1 7.515 1 10V15H2.5V10Z"/>
  </svg>
);

const aDSArrowCurvedUpRightIconDefinition = svgToIconDefinition(
  aDSArrowCurvedUpRightSvg,
  'ads-arrow-curved-up-right'
);

/**![ADSArrowCurvedUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yLjUgMTBDMi41IDguMzQzIDMuODQzIDcgNS41IDdIMTIuNDRMOS4yMiAxMC4yMkwxMC4yOCAxMS4yOEwxNC43OCA2Ljc4QzE0LjkyMSA2LjY0IDE1IDYuNDQ5IDE1IDYuMjVDMTUgNi4wNTEgMTQuOTIxIDUuODYgMTQuNzggNS43MkwxMC4yOCAxLjIyTDkuMjIgMi4yOEwxMi40NCA1LjVINS41QzMuMDE1IDUuNSAxIDcuNTE1IDEgMTBWMTVIMi41VjEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedUpRight';
}

export default RefIcon;
