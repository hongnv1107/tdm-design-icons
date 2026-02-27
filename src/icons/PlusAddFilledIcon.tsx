// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const plusAddFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5 19V13.5H5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5H10.5V5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5V10.5H19C19.8284 10.5 20.5 11.1716 20.5 12C20.5 12.8284 19.8284 13.5 19 13.5H13.5V19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19Z"/>
  </svg>
);

const plusAddFilledIconDefinition = svgToIconDefinition(
  plusAddFilledSvg,
  'plus-add-filled'
);

/**![PlusAddFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuNSAxOVYxMy41SDVDNC4xNzE1NyAxMy41IDMuNSAxMi44Mjg0IDMuNSAxMkMzLjUgMTEuMTcxNiA0LjE3MTU3IDEwLjUgNSAxMC41SDEwLjVWNUMxMC41IDQuMTcxNTcgMTEuMTcxNiAzLjUgMTIgMy41QzEyLjgyODQgMy41IDEzLjUgNC4xNzE1NyAxMy41IDVWMTAuNUgxOUMxOS44Mjg0IDEwLjUgMjAuNSAxMS4xNzE2IDIwLjUgMTJDMjAuNSAxMi44Mjg0IDE5LjgyODQgMTMuNSAxOSAxMy41SDEzLjVWMTlDMTMuNSAxOS44Mjg0IDEyLjgyODQgMjAuNSAxMiAyMC41QzExLjE3MTYgMjAuNSAxMC41IDE5LjgyODQgMTAuNSAxOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={plusAddFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusAddFilledIcon';
}

export default RefIcon;
