// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoNextOverlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1L13 15H11.5V8.708C11.353 9.044 11.096 9.341 10.729 9.539L4.582 12.862C3.416 13.493 2 12.648 2 11.323V4.677C2 3.352 3.416 2.508 4.582 3.138L10.729 6.461C11.096 6.659 11.353 6.956 11.5 7.292V1H13Z"/>
  </svg>
);

const aDSVideoNextOverlayIconDefinition = svgToIconDefinition(
  aDSVideoNextOverlaySvg,
  'ads-video-next-overlay'
);

/**![ADSVideoNextOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDFMMTMgMTVIMTEuNVY4LjcwOEMxMS4zNTMgOS4wNDQgMTEuMDk2IDkuMzQxIDEwLjcyOSA5LjUzOUw0LjU4MiAxMi44NjJDMy40MTYgMTMuNDkzIDIgMTIuNjQ4IDIgMTEuMzIzVjQuNjc3QzIgMy4zNTIgMy40MTYgMi41MDggNC41ODIgMy4xMzhMMTAuNzI5IDYuNDYxQzExLjA5NiA2LjY1OSAxMS4zNTMgNi45NTYgMTEuNSA3LjI5MlYxSDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoNextOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoNextOverlay';
}

export default RefIcon;
