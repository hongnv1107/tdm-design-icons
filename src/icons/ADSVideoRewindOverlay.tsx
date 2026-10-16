// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoRewindOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSVideoRewindOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC4xMzggMy44NDFDMTUuMDE0IDMuNTA0IDE2IDQuMTQ1IDE2IDUuMTI2VjEwLjg3NkMxNiAxMS45MjIgMTQuODc4IDEyLjU4MSAxMy45NjQgMTIuMDgxTDguNzE0IDkuMjA1QzguMjQ4IDguOTUgOC4wMTEgOC40OTIgOC4wMDEgOC4wM1YxMC44NzZDOC4wMDEgMTEuOTIyIDYuODc5IDEyLjU4MSA1Ljk2NSAxMi4wODFMMC43MTQgOS4yMDVDLTAuMjM4IDguNjgzIC0wLjIzOCA3LjMxOCAwLjcxNCA2Ljc5N0w1Ljk2NSAzLjkyMUw2LjEzOCAzLjg0MUM3LjAxNCAzLjUwNCA4LjAwMSA0LjE0NCA4LjAwMSA1LjEyNlY3Ljk2OEM4LjAxMSA3LjUwNyA4LjI0OSA3LjA1MSA4LjcxNCA2Ljc5N0wxMy45NjQgMy45MjFMMTQuMTM4IDMuODQxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoRewindOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoRewindOverlay';
}

export default RefIcon;
