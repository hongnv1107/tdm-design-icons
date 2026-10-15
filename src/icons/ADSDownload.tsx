// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDownloadSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V8.439L11.47 5.72L12.53 6.78L8.53 10.78C8.237 11.073 7.762 11.073 7.47 10.78L3.47 6.78L4.53 5.72L7.25 8.439V1H8.75ZM1 13V9H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9H15V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13Z"/>
  </svg>
);

const aDSDownloadIconDefinition = svgToIconDefinition(
  aDSDownloadSvg,
  'ads-download'
);

/**![ADSDownload](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMVY4LjQzOUwxMS40NyA1LjcyTDEyLjUzIDYuNzhMOC41MyAxMC43OEM4LjIzNyAxMS4wNzMgNy43NjIgMTEuMDczIDcuNDcgMTAuNzhMMy40NyA2Ljc4TDQuNTMgNS43Mkw3LjI1IDguNDM5VjFIOC43NVpNMSAxM1Y5SDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWOUgxNVYxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDownloadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDownload';
}

export default RefIcon;
