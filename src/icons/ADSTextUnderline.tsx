// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextUnderlineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSTextUnderline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSA4VjFINVY4QzUgOS42NTcgNi4zNDMgMTEgOCAxMUM5LjY1NyAxMSAxMSA5LjY1NyAxMSA4VjFIMTIuNVY4QzEyLjUgMTAuNDg1IDEwLjQ4NSAxMi41IDggMTIuNUM1LjUxNSAxMi41IDMuNSAxMC40ODUgMy41IDhaTTAgMTZWMTQuNUgxNlYxNkgwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextUnderlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextUnderline';
}

export default RefIcon;
