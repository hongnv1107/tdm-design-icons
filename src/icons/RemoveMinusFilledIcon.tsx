// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const removeMinusFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 10.5C19.8284 10.5 20.5 11.1716 20.5 12C20.5 12.8284 19.8284 13.5 19 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5H19Z" />
  </svg>
);

const removeMinusFilledIconDefinition = svgToIconDefinition(
  removeMinusFilledSvg,
  'remove-minus-filled'
);

/**![RemoveMinusFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMTAuNUMxOS44Mjg0IDEwLjUgMjAuNSAxMS4xNzE2IDIwLjUgMTJDMjAuNSAxMi44Mjg0IDE5LjgyODQgMTMuNSAxOSAxMy41SDVDNC4xNzE1NyAxMy41IDMuNSAxMi44Mjg0IDMuNSAxMkMzLjUgMTEuMTcxNiA0LjE3MTU3IDEwLjUgNSAxMC41SDE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={removeMinusFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RemoveMinusFilledIcon';
}

export default RefIcon;
