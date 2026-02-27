// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const checkOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.293 5.29297C19.6835 4.90245 20.3166 4.90245 20.7071 5.29297C21.0976 5.68349 21.0976 6.31651 20.7071 6.70703L9.70708 17.707C9.31655 18.0976 8.68354 18.0976 8.29302 17.707L3.29302 12.707C2.90249 12.3165 2.90249 11.6835 3.29302 11.293C3.65913 10.9269 4.23813 10.9043 4.63091 11.2246L4.70708 11.293L9.00005 15.5859L19.293 5.29297Z"/>
  </svg>
);

const checkOutlinedIconDefinition = svgToIconDefinition(
  checkOutlinedSvg,
  'check-outlined'
);

/**![CheckOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkuMjkzIDUuMjkyOTdDMTkuNjgzNSA0LjkwMjQ1IDIwLjMxNjYgNC45MDI0NSAyMC43MDcxIDUuMjkyOTdDMjEuMDk3NiA1LjY4MzQ5IDIxLjA5NzYgNi4zMTY1MSAyMC43MDcxIDYuNzA3MDNMOS43MDcwOCAxNy43MDdDOS4zMTY1NSAxOC4wOTc2IDguNjgzNTQgMTguMDk3NiA4LjI5MzAyIDE3LjcwN0wzLjI5MzAyIDEyLjcwN0MyLjkwMjQ5IDEyLjMxNjUgMi45MDI0OSAxMS42ODM1IDMuMjkzMDIgMTEuMjkzQzMuNjU5MTMgMTAuOTI2OSA0LjIzODEzIDEwLjkwNDMgNC42MzA5MSAxMS4yMjQ2TDQuNzA3MDggMTEuMjkzTDkuMDAwMDUgMTUuNTg1OUwxOS4yOTMgNS4yOTI5N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={checkOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckOutlinedIcon';
}

export default RefIcon;
