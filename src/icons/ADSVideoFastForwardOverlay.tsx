// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoFastForwardOverlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.999 5.126C7.999 4.144 8.986 3.504 9.862 3.841L10.035 3.921L15.286 6.797C16.238 7.318 16.238 8.683 15.286 9.205L10.035 12.081C9.121 12.581 7.999 11.922 7.999 10.876V8.03C7.989 8.492 7.752 8.95 7.286 9.205L2.036 12.081C1.122 12.581 0 11.922 0 10.876V5.126C0 4.145 0.986 3.504 1.862 3.841L2.036 3.921L7.286 6.797C7.751 7.051 7.988 7.507 7.999 7.968V5.126Z"/>
  </svg>
);

const aDSVideoFastForwardOverlayIconDefinition = svgToIconDefinition(
  aDSVideoFastForwardOverlaySvg,
  'ads-video-fast-forward-overlay'
);

/**![ADSVideoFastForwardOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy45OTkgNS4xMjZDNy45OTkgNC4xNDQgOC45ODYgMy41MDQgOS44NjIgMy44NDFMMTAuMDM1IDMuOTIxTDE1LjI4NiA2Ljc5N0MxNi4yMzggNy4zMTggMTYuMjM4IDguNjgzIDE1LjI4NiA5LjIwNUwxMC4wMzUgMTIuMDgxQzkuMTIxIDEyLjU4MSA3Ljk5OSAxMS45MjIgNy45OTkgMTAuODc2VjguMDNDNy45ODkgOC40OTIgNy43NTIgOC45NSA3LjI4NiA5LjIwNUwyLjAzNiAxMi4wODFDMS4xMjIgMTIuNTgxIDAgMTEuOTIyIDAgMTAuODc2VjUuMTI2QzAgNC4xNDUgMC45ODYgMy41MDQgMS44NjIgMy44NDFMMi4wMzYgMy45MjFMNy4yODYgNi43OTdDNy43NTEgNy4wNTEgNy45ODggNy41MDcgNy45OTkgNy45NjhWNS4xMjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoFastForwardOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoFastForwardOverlay';
}

export default RefIcon;
