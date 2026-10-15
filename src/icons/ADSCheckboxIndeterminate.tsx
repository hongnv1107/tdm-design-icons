// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckboxIndeterminateSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3ZM3.75 8.75H12.25V7.25H3.75V8.75Z"/>
  </svg>
);

const aDSCheckboxIndeterminateIconDefinition = svgToIconDefinition(
  aDSCheckboxIndeterminateSvg,
  'ads-checkbox-indeterminate'
);

/**![ADSCheckboxIndeterminate](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMUMxLjg5NSAxIDEgMS44OTUgMSAzVjEzQzEgMTQuMTA1IDEuODk1IDE1IDMgMTVIMTNDMTQuMTA1IDE1IDE1IDE0LjEwNSAxNSAxM1YzQzE1IDEuODk1IDE0LjEwNSAxIDEzIDFIM1pNMy43NSA4Ljc1SDEyLjI1VjcuMjVIMy43NVY4Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckboxIndeterminateIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckboxIndeterminate';
}

export default RefIcon;
