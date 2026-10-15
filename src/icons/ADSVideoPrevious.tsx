// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPreviousSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1L3 15H4.5V8.708C4.647 9.044 4.904 9.341 5.271 9.539L11.418 12.862C12.584 13.493 14 12.648 14 11.323V4.677C14 3.352 12.584 2.508 11.418 3.138L5.271 6.461C4.904 6.659 4.647 6.956 4.5 7.292V1H3ZM12.131 4.457C12.298 4.367 12.5 4.488 12.5 4.677V11.323C12.5 11.512 12.298 11.633 12.131 11.543L5.984 8.22C5.809 8.125 5.809 7.875 5.984 7.78L12.131 4.457Z"/>
  </svg>
);

const aDSVideoPreviousIconDefinition = svgToIconDefinition(
  aDSVideoPreviousSvg,
  'ads-video-previous'
);

/**![ADSVideoPrevious](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMUwzIDE1SDQuNVY4LjcwOEM0LjY0NyA5LjA0NCA0LjkwNCA5LjM0MSA1LjI3MSA5LjUzOUwxMS40MTggMTIuODYyQzEyLjU4NCAxMy40OTMgMTQgMTIuNjQ4IDE0IDExLjMyM1Y0LjY3N0MxNCAzLjM1MiAxMi41ODQgMi41MDggMTEuNDE4IDMuMTM4TDUuMjcxIDYuNDYxQzQuOTA0IDYuNjU5IDQuNjQ3IDYuOTU2IDQuNSA3LjI5MlYxSDNaTTEyLjEzMSA0LjQ1N0MxMi4yOTggNC4zNjcgMTIuNSA0LjQ4OCAxMi41IDQuNjc3VjExLjMyM0MxMi41IDExLjUxMiAxMi4yOTggMTEuNjMzIDEyLjEzMSAxMS41NDNMNS45ODQgOC4yMkM1LjgwOSA4LjEyNSA1LjgwOSA3Ljg3NSA1Ljk4NCA3Ljc4TDEyLjEzMSA0LjQ1N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPreviousIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPrevious';
}

export default RefIcon;
