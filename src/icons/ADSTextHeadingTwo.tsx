// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingTwoSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5H14.625C15.384 8.5 16 9.116 16 9.875V11.625C16 12.384 15.384 13 14.625 13H13V14.5H16V16H12.25C11.836 16 11.5 15.664 11.5 15.25V12.875C11.5 12.116 12.116 11.5 12.875 11.5H14.5V10H11.5V8.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingTwoIconDefinition = svgToIconDefinition(
  aDSTextHeadingTwoSvg,
  'ads-text-heading-two'
);

/**![ADSTextHeadingTwo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNSA4LjVIMTQuNjI1QzE1LjM4NCA4LjUgMTYgOS4xMTYgMTYgOS44NzVWMTEuNjI1QzE2IDEyLjM4NCAxNS4zODQgMTMgMTQuNjI1IDEzSDEzVjE0LjVIMTZWMTZIMTIuMjVDMTEuODM2IDE2IDExLjUgMTUuNjY0IDExLjUgMTUuMjVWMTIuODc1QzExLjUgMTIuMTE2IDEyLjExNiAxMS41IDEyLjg3NSAxMS41SDE0LjVWMTBIMTEuNVY4LjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUgNi4yNVYxSDFWMTNIMi41VjcuNzVIOFYxM0g5LjVWMUg4VjYuMjVIMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingTwoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingTwo';
}

export default RefIcon;
