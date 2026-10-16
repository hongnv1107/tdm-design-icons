// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCompassSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8ZM11.78 4.219C12 4.439 12.061 4.771 11.935 5.054L9.935 9.554C9.86 9.724 9.724 9.86 9.554 9.935L5.054 11.935C4.771 12.061 4.439 12 4.22 11.78C4 11.561 3.938 11.229 4.065 10.945L6.065 6.445C6.14 6.275 6.276 6.14 6.445 6.064L10.945 4.064C11.229 3.938 11.561 4 11.78 4.219ZM6.992 8.052L7.947 9.008L6.227 9.772L6.992 8.052ZM9.008 7.947L8.052 6.992L9.773 6.227L9.008 7.947Z"/>
  </svg>
);

const aDSCompassIconDefinition = svgToIconDefinition(
  aDSCompassSvg,
  'ads-compass'
);

/**![ADSCompass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMS41OSA0LjQxIDE0LjUgOCAxNC41QzExLjU5IDE0LjUgMTQuNSAxMS41OSAxNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNVpNMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4Wk0xMS43OCA0LjIxOUMxMiA0LjQzOSAxMi4wNjEgNC43NzEgMTEuOTM1IDUuMDU0TDkuOTM1IDkuNTU0QzkuODYgOS43MjQgOS43MjQgOS44NiA5LjU1NCA5LjkzNUw1LjA1NCAxMS45MzVDNC43NzEgMTIuMDYxIDQuNDM5IDEyIDQuMjIgMTEuNzhDNCAxMS41NjEgMy45MzggMTEuMjI5IDQuMDY1IDEwLjk0NUw2LjA2NSA2LjQ0NUM2LjE0IDYuMjc1IDYuMjc2IDYuMTQgNi40NDUgNi4wNjRMMTAuOTQ1IDQuMDY0QzExLjIyOSAzLjkzOCAxMS41NjEgNCAxMS43OCA0LjIxOVpNNi45OTIgOC4wNTJMNy45NDcgOS4wMDhMNi4yMjcgOS43NzJMNi45OTIgOC4wNTJaTTkuMDA4IDcuOTQ3TDguMDUyIDYuOTkyTDkuNzczIDYuMjI3TDkuMDA4IDcuOTQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCompassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCompass';
}

export default RefIcon;
