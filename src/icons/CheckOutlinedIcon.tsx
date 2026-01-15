// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const checkOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.293 5.29295C19.6835 4.90243 20.3166 4.90243 20.7071 5.29295C21.0976 5.68348 21.0976 6.31649 20.7071 6.70702L9.70708 17.707C9.31655 18.0975 8.68354 18.0975 8.29302 17.707L3.29302 12.707C2.90249 12.3165 2.90249 11.6835 3.29302 11.293C3.65913 10.9268 4.23813 10.9042 4.63091 11.2246L4.70708 11.293L9.00005 15.5859L19.293 5.29295Z" />
  </svg>
);

const checkOutlinedIconDefinition = svgToIconDefinition(
  checkOutlinedSvg,
  'check-outlined'
);

/**![CheckOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuMjkzIDUuMjkyOTVDMTkuNjgzNSA0LjkwMjQzIDIwLjMxNjYgNC45MDI0MyAyMC43MDcxIDUuMjkyOTVDMjEuMDk3NiA1LjY4MzQ4IDIxLjA5NzYgNi4zMTY0OSAyMC43MDcxIDYuNzA3MDJMOS43MDcwOCAxNy43MDdDOS4zMTY1NSAxOC4wOTc1IDguNjgzNTQgMTguMDk3NSA4LjI5MzAyIDE3LjcwN0wzLjI5MzAyIDEyLjcwN0MyLjkwMjQ5IDEyLjMxNjUgMi45MDI0OSAxMS42ODM1IDMuMjkzMDIgMTEuMjkzQzMuNjU5MTMgMTAuOTI2OCA0LjIzODEzIDEwLjkwNDIgNC42MzA5MSAxMS4yMjQ2TDQuNzA3MDggMTEuMjkzTDkuMDAwMDUgMTUuNTg1OUwxOS4yOTMgNS4yOTI5NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={checkOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckOutlinedIcon';
}

export default RefIcon;
