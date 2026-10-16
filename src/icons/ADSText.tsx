// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1V2.5H6.25V15H4.75V2.5H0V1H11ZM12 13V8H10V6.5H12V4H13.5V6.5H16V8H13.5V13C13.5 13.276 13.724 13.5 14 13.5H16V15H14C12.895 15 12 14.105 12 13Z"/>
  </svg>
);

const aDSTextIconDefinition = svgToIconDefinition(
  aDSTextSvg,
  'ads-text'
);

/**![ADSText](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSAxVjIuNUg2LjI1VjE1SDQuNzVWMi41SDBWMUgxMVpNMTIgMTNWOEgxMFY2LjVIMTJWNEgxMy41VjYuNUgxNlY4SDEzLjVWMTNDMTMuNSAxMy4yNzYgMTMuNzI0IDEzLjUgMTQgMTMuNUgxNlYxNUgxNEMxMi44OTUgMTUgMTIgMTQuMTA1IDEyIDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSText';
}

export default RefIcon;
