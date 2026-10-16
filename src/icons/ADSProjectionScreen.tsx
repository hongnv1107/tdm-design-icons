// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSProjectionScreenSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5H0V2H16V3.5H15V10C15 11.105 14.105 12 13 12H11.624L13.446 14.139L12.304 15.111L9.654 12H8.75V15H7.25V12H6.346L3.696 15.111L2.554 14.139L4.376 12H3C1.895 12 1 11.105 1 10V3.5ZM2.5 3.5V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V3.5H2.5Z"/>
  </svg>
);

const aDSProjectionScreenIconDefinition = svgToIconDefinition(
  aDSProjectionScreenSvg,
  'ads-projection-screen'
);

/**![ADSProjectionScreen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMy41SDBWMkgxNlYzLjVIMTVWMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkgxMS42MjRMMTMuNDQ2IDE0LjEzOUwxMi4zMDQgMTUuMTExTDkuNjU0IDEySDguNzVWMTVINy4yNVYxMkg2LjM0NkwzLjY5NiAxNS4xMTFMMi41NTQgMTQuMTM5TDQuMzc2IDEySDNDMS44OTUgMTIgMSAxMS4xMDUgMSAxMFYzLjVaTTIuNSAzLjVWMTBDMi41IDEwLjI3NiAyLjcyNCAxMC41IDMgMTAuNUgxM0MxMy4yNzYgMTAuNSAxMy41IDEwLjI3NiAxMy41IDEwVjMuNUgyLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSProjectionScreenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSProjectionScreen';
}

export default RefIcon;
