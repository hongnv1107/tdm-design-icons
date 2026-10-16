// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMarkdownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.25 3.5C1.543 3.5 1.809 3.671 1.932 3.938L4 8.45L6.068 3.938L6.12 3.842C6.257 3.631 6.493 3.5 6.75 3.5H7.25C7.664 3.5 8 3.836 8 4.25V12.5H6.5V6.595L4.682 10.563C4.559 10.829 4.293 11 4 11C3.707 11 3.441 10.829 3.318 10.563L1.5 6.595V12.5H0V4.25C0 3.836 0.336 3.5 0.75 3.5H1.25ZM13 3.5V9.611L14.664 7.531L15.836 8.469L12.836 12.219C12.694 12.397 12.478 12.5 12.25 12.5C12.022 12.5 11.806 12.397 11.664 12.219L8.664 8.469L9.836 7.531L11.5 9.611V3.5H13Z"/>
  </svg>
);

const aDSMarkdownIconDefinition = svgToIconDefinition(
  aDSMarkdownSvg,
  'ads-markdown'
);

/**![ADSMarkdown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xLjI1IDMuNUMxLjU0MyAzLjUgMS44MDkgMy42NzEgMS45MzIgMy45MzhMNCA4LjQ1TDYuMDY4IDMuOTM4TDYuMTIgMy44NDJDNi4yNTcgMy42MzEgNi40OTMgMy41IDYuNzUgMy41SDcuMjVDNy42NjQgMy41IDggMy44MzYgOCA0LjI1VjEyLjVINi41VjYuNTk1TDQuNjgyIDEwLjU2M0M0LjU1OSAxMC44MjkgNC4yOTMgMTEgNCAxMUMzLjcwNyAxMSAzLjQ0MSAxMC44MjkgMy4zMTggMTAuNTYzTDEuNSA2LjU5NVYxMi41SDBWNC4yNUMwIDMuODM2IDAuMzM2IDMuNSAwLjc1IDMuNUgxLjI1Wk0xMyAzLjVWOS42MTFMMTQuNjY0IDcuNTMxTDE1LjgzNiA4LjQ2OUwxMi44MzYgMTIuMjE5QzEyLjY5NCAxMi4zOTcgMTIuNDc4IDEyLjUgMTIuMjUgMTIuNUMxMi4wMjIgMTIuNSAxMS44MDYgMTIuMzk3IDExLjY2NCAxMi4yMTlMOC42NjQgOC40NjlMOS44MzYgNy41MzFMMTEuNSA5LjYxMVYzLjVIMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMarkdownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMarkdown';
}

export default RefIcon;
