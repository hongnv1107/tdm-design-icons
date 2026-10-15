// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldTextSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.5H8V1H13V2.5H11.25V4.5H14C15.105 4.5 16 5.395 16 6.5V9.5C16 10.605 15.105 11.5 14 11.5H11.25V13.5H13V15H8V13.5H9.75V2.5ZM11.25 10H14C14.276 10 14.5 9.776 14.5 9.5V6.5C14.5 6.224 14.276 6 14 6H11.25V10ZM2 6C1.724 6 1.5 6.224 1.5 6.5V9.5C1.5 9.776 1.724 10 2 10H8V11.5H2C0.895 11.5 0 10.605 0 9.5V6.5C0 5.395 0.895 4.5 2 4.5H8V6H2Z"/>
  </svg>
);

const aDSFieldTextIconDefinition = svgToIconDefinition(
  aDSFieldTextSvg,
  'ads-field-text'
);

/**![ADSFieldText](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzUgMi41SDhWMUgxM1YyLjVIMTEuMjVWNC41SDE0QzE1LjEwNSA0LjUgMTYgNS4zOTUgMTYgNi41VjkuNUMxNiAxMC42MDUgMTUuMTA1IDExLjUgMTQgMTEuNUgxMS4yNVYxMy41SDEzVjE1SDhWMTMuNUg5Ljc1VjIuNVpNMTEuMjUgMTBIMTRDMTQuMjc2IDEwIDE0LjUgOS43NzYgMTQuNSA5LjVWNi41QzE0LjUgNi4yMjQgMTQuMjc2IDYgMTQgNkgxMS4yNVYxMFpNMiA2QzEuNzI0IDYgMS41IDYuMjI0IDEuNSA2LjVWOS41QzEuNSA5Ljc3NiAxLjcyNCAxMCAyIDEwSDhWMTEuNUgyQzAuODk1IDExLjUgMCAxMC42MDUgMCA5LjVWNi41QzAgNS4zOTUgMC44OTUgNC41IDIgNC41SDhWNkgyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldTextIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldText';
}

export default RefIcon;
