// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDecisionSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.97 0.97L9.47 5.47L10.53 6.53L15.03 2.03L13.97 0.97ZM3.561 2.5H8V1H1.75C1.336 1 1 1.336 1 1.75V8H2.5V3.561L7.104 8.164C7.197 8.258 7.25 8.385 7.25 8.518V15H8.75V8.518C8.75 7.987 8.539 7.479 8.164 7.104L3.561 2.5Z"/>
  </svg>
);

const aDSDecisionIconDefinition = svgToIconDefinition(
  aDSDecisionSvg,
  'ads-decision'
);

/**![ADSDecision](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTcgMC45N0w5LjQ3IDUuNDdMMTAuNTMgNi41M0wxNS4wMyAyLjAzTDEzLjk3IDAuOTdaTTMuNTYxIDIuNUg4VjFIMS43NUMxLjMzNiAxIDEgMS4zMzYgMSAxLjc1VjhIMi41VjMuNTYxTDcuMTA0IDguMTY0QzcuMTk3IDguMjU4IDcuMjUgOC4zODUgNy4yNSA4LjUxOFYxNUg4Ljc1VjguNTE4QzguNzUgNy45ODcgOC41MzkgNy40NzkgOC4xNjQgNy4xMDRMMy41NjEgMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDecisionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDecision';
}

export default RefIcon;
