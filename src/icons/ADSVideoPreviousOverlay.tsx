// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPreviousOverlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1L3 15H4.5V8.708C4.647 9.044 4.904 9.341 5.271 9.539L11.418 12.862C12.584 13.493 14 12.648 14 11.323V4.677C14 3.352 12.584 2.508 11.418 3.138L5.271 6.461C4.904 6.659 4.647 6.956 4.5 7.292V1H3Z"/>
  </svg>
);

const aDSVideoPreviousOverlayIconDefinition = svgToIconDefinition(
  aDSVideoPreviousOverlaySvg,
  'ads-video-previous-overlay'
);

/**![ADSVideoPreviousOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMUwzIDE1SDQuNVY4LjcwOEM0LjY0NyA5LjA0NCA0LjkwNCA5LjM0MSA1LjI3MSA5LjUzOUwxMS40MTggMTIuODYyQzEyLjU4NCAxMy40OTMgMTQgMTIuNjQ4IDE0IDExLjMyM1Y0LjY3N0MxNCAzLjM1MiAxMi41ODQgMi41MDggMTEuNDE4IDMuMTM4TDUuMjcxIDYuNDYxQzQuOTA0IDYuNjU5IDQuNjQ3IDYuOTU2IDQuNSA3LjI5MlYxSDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPreviousOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPreviousOverlay';
}

export default RefIcon;
