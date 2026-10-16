// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSurveySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 3.5C13 3.224 12.776 3 12.5 3H11.5V4.25C11.5 4.664 11.164 5 10.75 5H5.25C4.836 5 4.5 4.664 4.5 4.25V3H3.5C3.224 3 3 3.224 3 3.5V14C3 14.276 3.224 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V3.5ZM6 10.5V12H4.5V10.5H6ZM11.5 10.5V12H7.5V10.5H11.5ZM6 7.5V9H4.5V7.5H6ZM11.5 7.5V9H7.5V7.5H11.5ZM6.5 1.5C6.224 1.5 6 1.724 6 2V3.5H10V2C10 1.724 9.776 1.5 9.5 1.5H6.5ZM14.5 14C14.5 15.105 13.605 16 12.5 16H3.5C2.395 16 1.5 15.105 1.5 14V3.5C1.5 2.395 2.395 1.5 3.5 1.5H4.565C4.788 0.638 5.568 0 6.5 0H9.5C10.432 0 11.212 0.638 11.435 1.5H12.5C13.605 1.5 14.5 2.395 14.5 3.5V14Z"/>
  </svg>
);

const aDSSurveyIconDefinition = svgToIconDefinition(
  aDSSurveySvg,
  'ads-survey'
);

/**![ADSSurvey](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyAzLjVDMTMgMy4yMjQgMTIuNzc2IDMgMTIuNSAzSDExLjVWNC4yNUMxMS41IDQuNjY0IDExLjE2NCA1IDEwLjc1IDVINS4yNUM0LjgzNiA1IDQuNSA0LjY2NCA0LjUgNC4yNVYzSDMuNUMzLjIyNCAzIDMgMy4yMjQgMyAzLjVWMTRDMyAxNC4yNzYgMy4yMjQgMTQuNSAzLjUgMTQuNUgxMi41QzEyLjc3NiAxNC41IDEzIDE0LjI3NiAxMyAxNFYzLjVaTTYgMTAuNVYxMkg0LjVWMTAuNUg2Wk0xMS41IDEwLjVWMTJINy41VjEwLjVIMTEuNVpNNiA3LjVWOUg0LjVWNy41SDZaTTExLjUgNy41VjlINy41VjcuNUgxMS41Wk02LjUgMS41QzYuMjI0IDEuNSA2IDEuNzI0IDYgMlYzLjVIMTBWMkMxMCAxLjcyNCA5Ljc3NiAxLjUgOS41IDEuNUg2LjVaTTE0LjUgMTRDMTQuNSAxNS4xMDUgMTMuNjA1IDE2IDEyLjUgMTZIMy41QzIuMzk1IDE2IDEuNSAxNS4xMDUgMS41IDE0VjMuNUMxLjUgMi4zOTUgMi4zOTUgMS41IDMuNSAxLjVINC41NjVDNC43ODggMC42MzggNS41NjggMCA2LjUgMEg5LjVDMTAuNDMyIDAgMTEuMjEyIDAuNjM4IDExLjQzNSAxLjVIMTIuNUMxMy42MDUgMS41IDE0LjUgMi4zOTUgMTQuNSAzLjVWMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSurveyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSurvey';
}

export default RefIcon;
