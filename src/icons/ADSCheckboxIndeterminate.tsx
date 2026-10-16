// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckboxIndeterminateSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3ZM3.75 8.75H12.25V7.25H3.75V8.75Z"/>
  </svg>
);

const aDSCheckboxIndeterminateIconDefinition = svgToIconDefinition(
  aDSCheckboxIndeterminateSvg,
  'ads-checkbox-indeterminate'
);

/**![ADSCheckboxIndeterminate](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAxQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUgxM0MxNC4xMDUgMTUgMTUgMTQuMTA1IDE1IDEzVjNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUgzWk0zLjc1IDguNzVIMTIuMjVWNy4yNUgzLjc1VjguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckboxIndeterminateIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckboxIndeterminate';
}

export default RefIcon;
