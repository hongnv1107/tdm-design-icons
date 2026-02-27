// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tagFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.2129 4C11.8719 4.00002 12.4337 4.23164 12.8975 4.69434L19.3408 11.123C19.7802 11.6101 20 12.1588 20 12.7676C19.9999 13.4006 19.7801 13.9485 19.3408 14.4111L14.4346 19.3057C13.9464 19.7684 13.3973 20 12.7871 20C12.1525 20 11.6034 19.7684 11.1396 19.3057L4.69531 12.877C4.23158 12.4143 4 11.8656 4 11.2324V5.75391C4.02441 5.2669 4.19544 4.85264 4.5127 4.51172C4.85442 4.19513 5.26964 4.02435 5.75781 4H11.2129ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6Z"/>
  </svg>
);

const tagFilledIconDefinition = svgToIconDefinition(
  tagFilledSvg,
  'tag-filled'
);

/**![TagFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuMjEyOSA0QzExLjg3MTkgNC4wMDAwMiAxMi40MzM3IDQuMjMxNjQgMTIuODk3NSA0LjY5NDM0TDE5LjM0MDggMTEuMTIzQzE5Ljc4MDIgMTEuNjEwMSAyMCAxMi4xNTg4IDIwIDEyLjc2NzZDMTkuOTk5OSAxMy40MDA2IDE5Ljc4MDEgMTMuOTQ4NSAxOS4zNDA4IDE0LjQxMTFMMTQuNDM0NiAxOS4zMDU3QzEzLjk0NjQgMTkuNzY4NCAxMy4zOTczIDIwIDEyLjc4NzEgMjBDMTIuMTUyNSAyMCAxMS42MDM0IDE5Ljc2ODQgMTEuMTM5NiAxOS4zMDU3TDQuNjk1MzEgMTIuODc3QzQuMjMxNTggMTIuNDE0MyA0IDExLjg2NTYgNCAxMS4yMzI0VjUuNzUzOTFDNC4wMjQ0MSA1LjI2NjkgNC4xOTU0NCA0Ljg1MjY0IDQuNTEyNyA0LjUxMTcyQzQuODU0NDIgNC4xOTUxMyA1LjI2OTY0IDQuMDI0MzUgNS43NTc4MSA0SDExLjIxMjlaTTcgNkM2LjQ0NzcyIDYgNiA2LjQ0NzcyIDYgN0M2IDcuNTUyMjggNi40NDc3MiA4IDcgOEM3LjU1MjI4IDggOCA3LjU1MjI4IDggN0M4IDYuNDQ3NzIgNy41NTIyOCA2IDcgNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tagFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagFilledIcon';
}

export default RefIcon;
