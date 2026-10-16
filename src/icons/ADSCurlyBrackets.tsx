// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCurlyBracketsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1L12.5 1C13.605 1 14.5 1.895 14.5 3V7.25L16 7.25V8.75L14.5 8.75V13C14.5 14.105 13.605 15 12.5 15H10V13.5H12.5C12.776 13.5 13 13.276 13 13L13 3C13 2.724 12.776 2.5 12.5 2.5L10 2.5V1ZM1.5 3C1.5 1.895 2.395 1 3.5 1H6V2.5H3.5C3.224 2.5 3 2.724 3 3V13C3 13.276 3.224 13.5 3.5 13.5H6V15H3.5C2.395 15 1.5 14.105 1.5 13V8.75H0V7.25H1.5V3Z"/>
  </svg>
);

const aDSCurlyBracketsIconDefinition = svgToIconDefinition(
  aDSCurlyBracketsSvg,
  'ads-curly-brackets'
);

/**![ADSCurlyBrackets](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDFMMTIuNSAxQzEzLjYwNSAxIDE0LjUgMS44OTUgMTQuNSAzVjcuMjVMMTYgNy4yNVY4Ljc1TDE0LjUgOC43NVYxM0MxNC41IDE0LjEwNSAxMy42MDUgMTUgMTIuNSAxNUgxMFYxMy41SDEyLjVDMTIuNzc2IDEzLjUgMTMgMTMuMjc2IDEzIDEzTDEzIDNDMTMgMi43MjQgMTIuNzc2IDIuNSAxMi41IDIuNUwxMCAyLjVWMVpNMS41IDNDMS41IDEuODk1IDIuMzk1IDEgMy41IDFINlYyLjVIMy41QzMuMjI0IDIuNSAzIDIuNzI0IDMgM1YxM0MzIDEzLjI3NiAzLjIyNCAxMy41IDMuNSAxMy41SDZWMTVIMy41QzIuMzk1IDE1IDEuNSAxNC4xMDUgMS41IDEzVjguNzVIMFY3LjI1SDEuNVYzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCurlyBracketsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCurlyBrackets';
}

export default RefIcon;
