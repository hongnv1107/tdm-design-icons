// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTakeoutContainerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.313 1.449C4.432 1.176 4.702 1 5 1H11C11.298 1 11.568 1.176 11.687 1.449L13.191 4.888L15.084 3.626L15.916 4.874L13.954 6.182L12.995 14.338C12.95 14.715 12.63 15 12.25 15H3.75C3.37 15 3.05 14.715 3.005 14.338L2.046 6.182L0.084 4.874L0.916 3.626L2.809 4.888L4.313 1.449ZM3.593 6.5L4.417 13.5H11.583L12.407 6.5H3.593ZM11.603 5L10.51 2.5H5.491L4.397 5H11.603Z"/>
  </svg>
);

const aDSTakeoutContainerIconDefinition = svgToIconDefinition(
  aDSTakeoutContainerSvg,
  'ads-takeout-container'
);

/**![ADSTakeoutContainer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzEzIDEuNDQ5QzQuNDMyIDEuMTc2IDQuNzAyIDEgNSAxSDExQzExLjI5OCAxIDExLjU2OCAxLjE3NiAxMS42ODcgMS40NDlMMTMuMTkxIDQuODg4TDE1LjA4NCAzLjYyNkwxNS45MTYgNC44NzRMMTMuOTU0IDYuMTgyTDEyLjk5NSAxNC4zMzhDMTIuOTUgMTQuNzE1IDEyLjYzIDE1IDEyLjI1IDE1SDMuNzVDMy4zNyAxNSAzLjA1IDE0LjcxNSAzLjAwNSAxNC4zMzhMMi4wNDYgNi4xODJMMC4wODQgNC44NzRMMC45MTYgMy42MjZMMi44MDkgNC44ODhMNC4zMTMgMS40NDlaTTMuNTkzIDYuNUw0LjQxNyAxMy41SDExLjU4M0wxMi40MDcgNi41SDMuNTkzWk0xMS42MDMgNUwxMC41MSAyLjVINS40OTFMNC4zOTcgNUgxMS42MDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTakeoutContainerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTakeoutContainer';
}

export default RefIcon;
