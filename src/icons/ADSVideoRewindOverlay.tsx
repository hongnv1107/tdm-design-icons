// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoRewindOverlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.138 3.841C15.014 3.504 16 4.145 16 5.126V10.876C16 11.922 14.878 12.581 13.964 12.081L8.714 9.205C8.248 8.95 8.011 8.492 8.001 8.03V10.876C8.001 11.922 6.879 12.581 5.965 12.081L0.714 9.205C-0.238 8.683 -0.238 7.318 0.714 6.797L5.965 3.921L6.138 3.841C7.014 3.504 8.001 4.144 8.001 5.126V7.968C8.011 7.507 8.249 7.051 8.714 6.797L13.964 3.921L14.138 3.841Z"/>
  </svg>
);

const aDSVideoRewindOverlayIconDefinition = svgToIconDefinition(
  aDSVideoRewindOverlaySvg,
  'ads-video-rewind-overlay'
);

/**![ADSVideoRewindOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMTM4IDMuODQxQzE1LjAxNCAzLjUwNCAxNiA0LjE0NSAxNiA1LjEyNlYxMC44NzZDMTYgMTEuOTIyIDE0Ljg3OCAxMi41ODEgMTMuOTY0IDEyLjA4MUw4LjcxNCA5LjIwNUM4LjI0OCA4Ljk1IDguMDExIDguNDkyIDguMDAxIDguMDNWMTAuODc2QzguMDAxIDExLjkyMiA2Ljg3OSAxMi41ODEgNS45NjUgMTIuMDgxTDAuNzE0IDkuMjA1Qy0wLjIzOCA4LjY4MyAtMC4yMzggNy4zMTggMC43MTQgNi43OTdMNS45NjUgMy45MjFMNi4xMzggMy44NDFDNy4wMTQgMy41MDQgOC4wMDEgNC4xNDQgOC4wMDEgNS4xMjZWNy45NjhDOC4wMTEgNy41MDcgOC4yNDkgNy4wNTEgOC43MTQgNi43OTdMMTMuOTY0IDMuOTIxTDE0LjEzOCAzLjg0MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoRewindOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoRewindOverlay';
}

export default RefIcon;
