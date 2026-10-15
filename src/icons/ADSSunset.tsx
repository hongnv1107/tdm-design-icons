// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSunsetSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V3H7.25V1H8.75ZM11.75 3.845L13.164 2.43L14.225 3.491L12.811 4.905L11.75 3.845ZM3.164 4.914L1.75 3.5L2.811 2.439L4.225 3.854L3.164 4.914ZM8 6C6.343 6 5 7.343 5 9H3.5C3.5 6.515 5.515 4.5 8 4.5C10.485 4.5 12.5 6.515 12.5 9H11C11 7.343 9.657 6 8 6ZM2 9H0V7.5H2V9ZM16 9H14V7.5H16V9ZM15 12H1V10.5H15V12ZM10.5 13.5V15H5.5V13.5H10.5Z"/>
  </svg>
);

const aDSSunsetIconDefinition = svgToIconDefinition(
  aDSSunsetSvg,
  'ads-sunset'
);

/**![ADSSunset](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMVYzSDcuMjVWMUg4Ljc1Wk0xMS43NSAzLjg0NUwxMy4xNjQgMi40M0wxNC4yMjUgMy40OTFMMTIuODExIDQuOTA1TDExLjc1IDMuODQ1Wk0zLjE2NCA0LjkxNEwxLjc1IDMuNUwyLjgxMSAyLjQzOUw0LjIyNSAzLjg1NEwzLjE2NCA0LjkxNFpNOCA2QzYuMzQzIDYgNSA3LjM0MyA1IDlIMy41QzMuNSA2LjUxNSA1LjUxNSA0LjUgOCA0LjVDMTAuNDg1IDQuNSAxMi41IDYuNTE1IDEyLjUgOUgxMUMxMSA3LjM0MyA5LjY1NyA2IDggNlpNMiA5SDBWNy41SDJWOVpNMTYgOUgxNFY3LjVIMTZWOVpNMTUgMTJIMVYxMC41SDE1VjEyWk0xMC41IDEzLjVWMTVINS41VjEzLjVIMTAuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSunsetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSunset';
}

export default RefIcon;
