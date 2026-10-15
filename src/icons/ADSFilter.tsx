// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFilterSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSFilter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgMTJWMTMuNUg1VjEySDExWk0xMyA3LjI1VjguNzVMMyA4Ljc1VjcuMjVMMTMgNy4yNVpNMTUgMi41VjRMMSA0TDEgMi41TDE1IDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFilterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFilter';
}

export default RefIcon;
