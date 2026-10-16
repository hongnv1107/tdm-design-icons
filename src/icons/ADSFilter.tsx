// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFilterSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 12V13.5H5V12H11ZM13 7.25V8.75L3 8.75V7.25L13 7.25ZM15 2.5V4L1 4L1 2.5L15 2.5Z"/>
  </svg>
);

const aDSFilterIconDefinition = svgToIconDefinition(
  aDSFilterSvg,
  'ads-filter'
);

/**![ADSFilter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSAxMlYxMy41SDVWMTJIMTFaTTEzIDcuMjVWOC43NUwzIDguNzVWNy4yNUwxMyA3LjI1Wk0xNSAyLjVWNEwxIDRMMSAyLjVMMTUgMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFilterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFilter';
}

export default RefIcon;
