// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReplyRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.22 2.279L13.44 5.499H8.5C3.806 5.499 0 9.305 0 13.999H1.5C1.5 10.133 4.634 6.999 8.5 6.999H13.44L10.22 10.219L11.28 11.279L15.78 6.779C15.921 6.639 16 6.448 16 6.249C16 6.05 15.921 5.859 15.78 5.719L11.28 1.219L10.22 2.279Z"/>
  </svg>
);

const aDSReplyRightIconDefinition = svgToIconDefinition(
  aDSReplyRightSvg,
  'ads-reply-right'
);

/**![ADSReplyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuMjIgMi4yNzlMMTMuNDQgNS40OTlIOC41QzMuODA2IDUuNDk5IDAgOS4zMDUgMCAxMy45OTlIMS41QzEuNSAxMC4xMzMgNC42MzQgNi45OTkgOC41IDYuOTk5SDEzLjQ0TDEwLjIyIDEwLjIxOUwxMS4yOCAxMS4yNzlMMTUuNzggNi43NzlDMTUuOTIxIDYuNjM5IDE2IDYuNDQ4IDE2IDYuMjQ5QzE2IDYuMDUgMTUuOTIxIDUuODU5IDE1Ljc4IDUuNzE5TDExLjI4IDEuMjE5TDEwLjIyIDIuMjc5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReplyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReplyRight';
}

export default RefIcon;
