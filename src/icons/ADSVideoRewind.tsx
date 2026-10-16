// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoRewindSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.001 5.126C8.001 4.144 7.014 3.504 6.138 3.841L5.965 3.921L0.714 6.797C-0.238 7.318 -0.238 8.683 0.714 9.205L5.965 12.081C6.879 12.581 8.001 11.922 8.001 10.876V8.03C8.01 8.492 8.248 8.95 8.714 9.205L13.964 12.081C14.878 12.581 16 11.922 16 10.876V5.126C16 4.145 15.014 3.504 14.138 3.841L13.964 3.921L8.714 6.797C8.249 7.051 8.011 7.507 8.001 7.968V5.126ZM14.5 10.664L9.638 8.001L14.5 5.337V10.664ZM6.501 10.664L1.639 8.001L6.501 5.337V10.664Z"/>
  </svg>
);

const aDSVideoRewindIconDefinition = svgToIconDefinition(
  aDSVideoRewindSvg,
  'ads-video-rewind'
);

/**![ADSVideoRewind](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4wMDEgNS4xMjZDOC4wMDEgNC4xNDQgNy4wMTQgMy41MDQgNi4xMzggMy44NDFMNS45NjUgMy45MjFMMC43MTQgNi43OTdDLTAuMjM4IDcuMzE4IC0wLjIzOCA4LjY4MyAwLjcxNCA5LjIwNUw1Ljk2NSAxMi4wODFDNi44NzkgMTIuNTgxIDguMDAxIDExLjkyMiA4LjAwMSAxMC44NzZWOC4wM0M4LjAxIDguNDkyIDguMjQ4IDguOTUgOC43MTQgOS4yMDVMMTMuOTY0IDEyLjA4MUMxNC44NzggMTIuNTgxIDE2IDExLjkyMiAxNiAxMC44NzZWNS4xMjZDMTYgNC4xNDUgMTUuMDE0IDMuNTA0IDE0LjEzOCAzLjg0MUwxMy45NjQgMy45MjFMOC43MTQgNi43OTdDOC4yNDkgNy4wNTEgOC4wMTEgNy41MDcgOC4wMDEgNy45NjhWNS4xMjZaTTE0LjUgMTAuNjY0TDkuNjM4IDguMDAxTDE0LjUgNS4zMzdWMTAuNjY0Wk02LjUwMSAxMC42NjRMMS42MzkgOC4wMDFMNi41MDEgNS4zMzdWMTAuNjY0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoRewindIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoRewind';
}

export default RefIcon;
