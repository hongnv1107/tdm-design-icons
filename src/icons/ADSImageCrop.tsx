// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageCropSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V0H4.5V3H11C12.105 3 13 3.895 13 5V11.5H16V13H13V16H11.5V5C11.5 4.724 11.276 4.5 11 4.5H0V3H3ZM3 11V6H4.5V11C4.5 11.276 4.724 11.5 5 11.5H10V13H5C3.895 13 3 12.105 3 11Z"/>
  </svg>
);

const aDSImageCropIconDefinition = svgToIconDefinition(
  aDSImageCropSvg,
  'ads-image-crop'
);

/**![ADSImageCrop](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgM1YwSDQuNVYzSDExQzEyLjEwNSAzIDEzIDMuODk1IDEzIDVWMTEuNUgxNlYxM0gxM1YxNkgxMS41VjVDMTEuNSA0LjcyNCAxMS4yNzYgNC41IDExIDQuNUgwVjNIM1pNMyAxMVY2SDQuNVYxMUM0LjUgMTEuMjc2IDQuNzI0IDExLjUgNSAxMS41SDEwVjEzSDVDMy44OTUgMTMgMyAxMi4xMDUgMyAxMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageCropIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImageCrop';
}

export default RefIcon;
