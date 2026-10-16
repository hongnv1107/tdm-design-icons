// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextUnderlineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8V1H5V8C5 9.657 6.343 11 8 11C9.657 11 11 9.657 11 8V1H12.5V8C12.5 10.485 10.485 12.5 8 12.5C5.515 12.5 3.5 10.485 3.5 8ZM0 16V14.5H16V16H0Z"/>
  </svg>
);

const aDSTextUnderlineIconDefinition = svgToIconDefinition(
  aDSTextUnderlineSvg,
  'ads-text-underline'
);

/**![ADSTextUnderline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy41IDhWMUg1VjhDNSA5LjY1NyA2LjM0MyAxMSA4IDExQzkuNjU3IDExIDExIDkuNjU3IDExIDhWMUgxMi41VjhDMTIuNSAxMC40ODUgMTAuNDg1IDEyLjUgOCAxMi41QzUuNTE1IDEyLjUgMy41IDEwLjQ4NSAzLjUgOFpNMCAxNlYxNC41SDE2VjE2SDBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextUnderlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextUnderline';
}

export default RefIcon;
