// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextWrapSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.375 5L0 5L0 3.5L13.375 3.5C14.825 3.5 16 4.675 16 6.125L16 8.875C16 10.325 14.825 11.5 13.375 11.5L9.561 11.5L11.28 13.22L10.22 14.28L7.22 11.28C6.927 10.987 6.927 10.513 7.22 10.22L10.22 7.22L11.28 8.28L9.561 10L13.375 10C13.996 10 14.5 9.496 14.5 8.875L14.5 6.125C14.5 5.504 13.996 5 13.375 5ZM5 11.5L0 11.5L0 10L5 10L5 11.5Z"/>
  </svg>
);

const aDSTextWrapIconDefinition = svgToIconDefinition(
  aDSTextWrapSvg,
  'ads-text-wrap'
);

/**![ADSTextWrap](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjM3NSA1TDAgNUwwIDMuNUwxMy4zNzUgMy41QzE0LjgyNSAzLjUgMTYgNC42NzUgMTYgNi4xMjVMMTYgOC44NzVDMTYgMTAuMzI1IDE0LjgyNSAxMS41IDEzLjM3NSAxMS41TDkuNTYxIDExLjVMMTEuMjggMTMuMjJMMTAuMjIgMTQuMjhMNy4yMiAxMS4yOEM2LjkyNyAxMC45ODcgNi45MjcgMTAuNTEzIDcuMjIgMTAuMjJMMTAuMjIgNy4yMkwxMS4yOCA4LjI4TDkuNTYxIDEwTDEzLjM3NSAxMEMxMy45OTYgMTAgMTQuNSA5LjQ5NiAxNC41IDguODc1TDE0LjUgNi4xMjVDMTQuNSA1LjUwNCAxMy45OTYgNSAxMy4zNzUgNVpNNSAxMS41TDAgMTEuNUwwIDEwTDUgMTBMNSAxMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextWrapIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextWrap';
}

export default RefIcon;
