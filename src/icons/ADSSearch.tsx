// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSearchSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.5C4.515 2.5 2.5 4.515 2.5 7C2.5 9.485 4.515 11.5 7 11.5C8.243 11.5 9.367 10.997 10.182 10.182C10.997 9.367 11.5 8.243 11.5 7C11.5 4.515 9.485 2.5 7 2.5ZM1 7C1 3.686 3.686 1 7 1C10.314 1 13 3.686 13 7C13 8.386 12.529 9.663 11.74 10.679L15.03 13.97L13.97 15.03L10.679 11.74C9.663 12.529 8.386 13 7 13C3.686 13 1 10.314 1 7Z"/>
  </svg>
);

const aDSSearchIconDefinition = svgToIconDefinition(
  aDSSearchSvg,
  'ads-search'
);

/**![ADSSearch](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi41QzQuNTE1IDIuNSAyLjUgNC41MTUgMi41IDdDMi41IDkuNDg1IDQuNTE1IDExLjUgNyAxMS41QzguMjQzIDExLjUgOS4zNjcgMTAuOTk3IDEwLjE4MiAxMC4xODJDMTAuOTk3IDkuMzY3IDExLjUgOC4yNDMgMTEuNSA3QzExLjUgNC41MTUgOS40ODUgMi41IDcgMi41Wk0xIDdDMSAzLjY4NiAzLjY4NiAxIDcgMUMxMC4zMTQgMSAxMyAzLjY4NiAxMyA3QzEzIDguMzg2IDEyLjUyOSA5LjY2MyAxMS43NCAxMC42NzlMMTUuMDMgMTMuOTdMMTMuOTcgMTUuMDNMMTAuNjc5IDExLjc0QzkuNjYzIDEyLjUyOSA4LjM4NiAxMyA3IDEzQzMuNjg2IDEzIDEgMTAuMzE0IDEgN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSearchIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSearch';
}

export default RefIcon;
