// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSUndoSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22 4.72L4.72 1.22L5.78 2.28L3.561 4.5L10.25 4.5C12.873 4.5 15 6.627 15 9.25C15 11.873 12.873 14 10.25 14H8V12.5H10.25C12.045 12.5 13.5 11.045 13.5 9.25C13.5 7.455 12.045 6 10.25 6L3.561 6L5.78 8.22L4.72 9.28L1.22 5.78C1.079 5.64 1 5.449 1 5.25C1 5.051 1.079 4.86 1.22 4.72Z"/>
  </svg>
);

const aDSUndoIconDefinition = svgToIconDefinition(
  aDSUndoSvg,
  'ads-undo'
);

/**![ADSUndo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4yMiA0LjcyTDQuNzIgMS4yMkw1Ljc4IDIuMjhMMy41NjEgNC41TDEwLjI1IDQuNUMxMi44NzMgNC41IDE1IDYuNjI3IDE1IDkuMjVDMTUgMTEuODczIDEyLjg3MyAxNCAxMC4yNSAxNEg4VjEyLjVIMTAuMjVDMTIuMDQ1IDEyLjUgMTMuNSAxMS4wNDUgMTMuNSA5LjI1QzEzLjUgNy40NTUgMTIuMDQ1IDYgMTAuMjUgNkwzLjU2MSA2TDUuNzggOC4yMkw0LjcyIDkuMjhMMS4yMiA1Ljc4QzEuMDc5IDUuNjQgMSA1LjQ0OSAxIDUuMjVDMSA1LjA1MSAxLjA3OSA0Ljg2IDEuMjIgNC43MloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSUndoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSUndo';
}

export default RefIcon;
