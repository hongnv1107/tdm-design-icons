// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLinkSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22 2.22C9.756 0.684 12.245 0.684 13.781 2.22C15.316 3.755 15.316 6.245 13.781 7.78L11.531 10.03L10.47 8.97L12.72 6.72C13.67 5.77 13.67 4.23 12.72 3.28C11.77 2.331 10.23 2.331 9.281 3.28L7.031 5.53L5.97 4.47L8.22 2.22ZM11.281 5.78L5.781 11.28L4.72 10.22L10.22 4.72L11.281 5.78ZM2.22 8.22L4.47 5.97L5.531 7.03L3.281 9.28C2.331 10.23 2.331 11.77 3.281 12.72C4.23 13.67 5.77 13.67 6.72 12.72L8.97 10.47L10.031 11.53L7.781 13.78C6.245 15.316 3.756 15.316 2.22 13.78C0.684 12.245 0.684 9.755 2.22 8.22Z"/>
  </svg>
);

const aDSLinkIconDefinition = svgToIconDefinition(
  aDSLinkSvg,
  'ads-link'
);

/**![ADSLink](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4yMiAyLjIyQzkuNzU2IDAuNjg0IDEyLjI0NSAwLjY4NCAxMy43ODEgMi4yMkMxNS4zMTYgMy43NTUgMTUuMzE2IDYuMjQ1IDEzLjc4MSA3Ljc4TDExLjUzMSAxMC4wM0wxMC40NyA4Ljk3TDEyLjcyIDYuNzJDMTMuNjcgNS43NyAxMy42NyA0LjIzIDEyLjcyIDMuMjhDMTEuNzcgMi4zMzEgMTAuMjMgMi4zMzEgOS4yODEgMy4yOEw3LjAzMSA1LjUzTDUuOTcgNC40N0w4LjIyIDIuMjJaTTExLjI4MSA1Ljc4TDUuNzgxIDExLjI4TDQuNzIgMTAuMjJMMTAuMjIgNC43MkwxMS4yODEgNS43OFpNMi4yMiA4LjIyTDQuNDcgNS45N0w1LjUzMSA3LjAzTDMuMjgxIDkuMjhDMi4zMzEgMTAuMjMgMi4zMzEgMTEuNzcgMy4yODEgMTIuNzJDNC4yMyAxMy42NyA1Ljc3IDEzLjY3IDYuNzIgMTIuNzJMOC45NyAxMC40N0wxMC4wMzEgMTEuNTNMNy43ODEgMTMuNzhDNi4yNDUgMTUuMzE2IDMuNzU2IDE1LjMxNiAyLjIyIDEzLjc4QzAuNjg0IDEyLjI0NSAwLjY4NCA5Ljc1NSAyLjIyIDguMjJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLinkIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLink';
}

export default RefIcon;
