// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSmallSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1V2.5H6.251V15H4.751V2.5H0V1H11ZM14.5 12.375V11.875C14.5 11.254 13.996 10.75 13.375 10.75H11.625C10.175 10.75 9 9.575 9 8.125V7.625C9 6.175 10.175 5 11.625 5H13.5C14.881 5 16 6.119 16 7.5H14.5C14.5 6.948 14.052 6.5 13.5 6.5H11.625C11.004 6.5 10.5 7.004 10.5 7.625V8.125C10.5 8.746 11.004 9.25 11.625 9.25H13.375C14.825 9.25 16 10.425 16 11.875V12.375C16 13.825 14.825 15 13.375 15H11.5C10.119 15 9 13.881 9 12.5H10.5C10.5 13.052 10.948 13.5 11.5 13.5H13.375C13.996 13.5 14.5 12.996 14.5 12.375Z"/>
  </svg>
);

const aDSTextSmallIconDefinition = svgToIconDefinition(
  aDSTextSmallSvg,
  'ads-text-small'
);

/**![ADSTextSmall](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgMVYyLjVINi4yNTFWMTVINC43NTFWMi41SDBWMUgxMVpNMTQuNSAxMi4zNzVWMTEuODc1QzE0LjUgMTEuMjU0IDEzLjk5NiAxMC43NSAxMy4zNzUgMTAuNzVIMTEuNjI1QzEwLjE3NSAxMC43NSA5IDkuNTc1IDkgOC4xMjVWNy42MjVDOSA2LjE3NSAxMC4xNzUgNSAxMS42MjUgNUgxMy41QzE0Ljg4MSA1IDE2IDYuMTE5IDE2IDcuNUgxNC41QzE0LjUgNi45NDggMTQuMDUyIDYuNSAxMy41IDYuNUgxMS42MjVDMTEuMDA0IDYuNSAxMC41IDcuMDA0IDEwLjUgNy42MjVWOC4xMjVDMTAuNSA4Ljc0NiAxMS4wMDQgOS4yNSAxMS42MjUgOS4yNUgxMy4zNzVDMTQuODI1IDkuMjUgMTYgMTAuNDI1IDE2IDExLjg3NVYxMi4zNzVDMTYgMTMuODI1IDE0LjgyNSAxNSAxMy4zNzUgMTVIMTEuNUMxMC4xMTkgMTUgOSAxMy44ODEgOSAxMi41SDEwLjVDMTAuNSAxMy4wNTIgMTAuOTQ4IDEzLjUgMTEuNSAxMy41SDEzLjM3NUMxMy45OTYgMTMuNSAxNC41IDEyLjk5NiAxNC41IDEyLjM3NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSmallIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSmall';
}

export default RefIcon;
