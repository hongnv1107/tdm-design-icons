// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCoinsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C8.829 2.5 7.792 3.074 7.155 3.96L5.937 3.085C6.844 1.824 8.326 1 10 1C12.761 1 15 3.239 15 6C15 7.674 14.176 9.157 12.915 10.063L12.04 8.845C12.926 8.208 13.5 7.171 13.5 6C13.5 4.067 11.933 2.5 10 2.5ZM6 6.5C4.067 6.5 2.5 8.067 2.5 10C2.5 11.933 4.067 13.5 6 13.5C7.933 13.5 9.5 11.933 9.5 10C9.5 8.067 7.933 6.5 6 6.5ZM1 10C1 7.239 3.239 5 6 5C8.761 5 11 7.239 11 10C11 12.761 8.761 15 6 15C3.239 15 1 12.761 1 10Z"/>
  </svg>
);

const aDSCoinsIconDefinition = svgToIconDefinition(
  aDSCoinsSvg,
  'ads-coins'
);

/**![ADSCoins](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDIuNUM4LjgyOSAyLjUgNy43OTIgMy4wNzQgNy4xNTUgMy45Nkw1LjkzNyAzLjA4NUM2Ljg0NCAxLjgyNCA4LjMyNiAxIDEwIDFDMTIuNzYxIDEgMTUgMy4yMzkgMTUgNkMxNSA3LjY3NCAxNC4xNzYgOS4xNTcgMTIuOTE1IDEwLjA2M0wxMi4wNCA4Ljg0NUMxMi45MjYgOC4yMDggMTMuNSA3LjE3MSAxMy41IDZDMTMuNSA0LjA2NyAxMS45MzMgMi41IDEwIDIuNVpNNiA2LjVDNC4wNjcgNi41IDIuNSA4LjA2NyAyLjUgMTBDMi41IDExLjkzMyA0LjA2NyAxMy41IDYgMTMuNUM3LjkzMyAxMy41IDkuNSAxMS45MzMgOS41IDEwQzkuNSA4LjA2NyA3LjkzMyA2LjUgNiA2LjVaTTEgMTBDMSA3LjIzOSAzLjIzOSA1IDYgNUM4Ljc2MSA1IDExIDcuMjM5IDExIDEwQzExIDEyLjc2MSA4Ljc2MSAxNSA2IDE1QzMuMjM5IDE1IDEgMTIuNzYxIDEgMTBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCoinsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCoins';
}

export default RefIcon;
