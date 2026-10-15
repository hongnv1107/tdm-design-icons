// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAngleBracketsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.315 14.446L10.315 0.945L11.685 1.555L5.685 15.055L4.315 14.446ZM13.982 10L11.057 12.145L11.944 13.355L15.694 10.605C15.886 10.464 16 10.239 16 10C16 9.761 15.886 9.537 15.694 9.395L11.944 6.645L11.057 7.855L13.982 10ZM2.018 6L4.944 8.145L4.056 9.355L0.306 6.605C0.114 6.464 0 6.239 0 6C0 5.761 0.114 5.537 0.306 5.395L4.056 2.645L4.944 3.855L2.018 6Z"/>
  </svg>
);

const aDSAngleBracketsIconDefinition = svgToIconDefinition(
  aDSAngleBracketsSvg,
  'ads-angle-brackets'
);

/**![ADSAngleBrackets](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzE1IDE0LjQ0NkwxMC4zMTUgMC45NDVMMTEuNjg1IDEuNTU1TDUuNjg1IDE1LjA1NUw0LjMxNSAxNC40NDZaTTEzLjk4MiAxMEwxMS4wNTcgMTIuMTQ1TDExLjk0NCAxMy4zNTVMMTUuNjk0IDEwLjYwNUMxNS44ODYgMTAuNDY0IDE2IDEwLjIzOSAxNiAxMEMxNiA5Ljc2MSAxNS44ODYgOS41MzcgMTUuNjk0IDkuMzk1TDExLjk0NCA2LjY0NUwxMS4wNTcgNy44NTVMMTMuOTgyIDEwWk0yLjAxOCA2TDQuOTQ0IDguMTQ1TDQuMDU2IDkuMzU1TDAuMzA2IDYuNjA1QzAuMTE0IDYuNDY0IDAgNi4yMzkgMCA2QzAgNS43NjEgMC4xMTQgNS41MzcgMC4zMDYgNS4zOTVMNC4wNTYgMi42NDVMNC45NDQgMy44NTVMMi4wMTggNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAngleBracketsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAngleBrackets';
}

export default RefIcon;
