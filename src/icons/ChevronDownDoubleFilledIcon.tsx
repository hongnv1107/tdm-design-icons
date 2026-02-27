// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronDownDoubleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.707 5.29302C18.0731 5.65913 18.0957 6.23813 17.7754 6.63091L17.707 6.70708L12.707 11.7071C12.3165 12.0976 11.6835 12.0976 11.293 11.7071L6.29296 6.70708C5.90244 6.31655 5.90244 5.68354 6.29296 5.29302C6.68348 4.90249 7.3165 4.90249 7.70702 5.29302L12 9.58598L16.293 5.29302L16.3691 5.22466C16.7619 4.90431 17.3409 4.9269 17.707 5.29302ZM17.707 12.293C18.0731 12.6591 18.0957 13.2381 17.7754 13.6309L17.707 13.7071L12.707 18.7071C12.3165 19.0976 11.6835 19.0976 11.293 18.7071L6.29296 13.7071C5.90244 13.3166 5.90244 12.6835 6.29296 12.293C6.68348 11.9025 7.3165 11.9025 7.70702 12.293L12 16.586L16.293 12.293L16.3691 12.2247C16.7619 11.9043 17.3409 11.9269 17.707 12.293Z"/>
  </svg>
);

const chevronDownDoubleFilledIconDefinition = svgToIconDefinition(
  chevronDownDoubleFilledSvg,
  'chevron-down-double-filled'
);

/**![ChevronDownDoubleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcuNzA3IDUuMjkzMDJDMTguMDczMSA1LjY1OTEzIDE4LjA5NTcgNi4yMzgxMyAxNy43NzU0IDYuNjMwOTFMMTcuNzA3IDYuNzA3MDhMMTIuNzA3IDExLjcwNzFDMTIuMzE2NSAxMi4wOTc2IDExLjY4MzUgMTIuMDk3NiAxMS4yOTMgMTEuNzA3MUw2LjI5Mjk2IDYuNzA3MDhDNS45MDI0NCA2LjMxNjU1IDUuOTAyNDQgNS42ODM1NCA2LjI5Mjk2IDUuMjkzMDJDNi42ODM0OCA0LjkwMjQ5IDcuMzE2NSA0LjkwMjQ5IDcuNzA3MDIgNS4yOTMwMkwxMiA5LjU4NTk4TDE2LjI5MyA1LjI5MzAyTDE2LjM2OTEgNS4yMjQ2NkMxNi43NjE5IDQuOTA0MzEgMTcuMzQwOSA0LjkyNjkgMTcuNzA3IDUuMjkzMDJaTTE3LjcwNyAxMi4yOTNDMTguMDczMSAxMi42NTkxIDE4LjA5NTcgMTMuMjM4MSAxNy43NzU0IDEzLjYzMDlMMTcuNzA3IDEzLjcwNzFMMTIuNzA3IDE4LjcwNzFDMTIuMzE2NSAxOS4wOTc2IDExLjY4MzUgMTkuMDk3NiAxMS4yOTMgMTguNzA3MUw2LjI5Mjk2IDEzLjcwNzFDNS45MDI0NCAxMy4zMTY2IDUuOTAyNDQgMTIuNjgzNSA2LjI5Mjk2IDEyLjI5M0M2LjY4MzQ4IDExLjkwMjUgNy4zMTY1IDExLjkwMjUgNy43MDcwMiAxMi4yOTNMMTIgMTYuNTg2TDE2LjI5MyAxMi4yOTNMMTYuMzY5MSAxMi4yMjQ3QzE2Ljc2MTkgMTEuOTA0MyAxNy4zNDA5IDExLjkyNjkgMTcuNzA3IDEyLjI5M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronDownDoubleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronDownDoubleFilledIcon';
}

export default RefIcon;
