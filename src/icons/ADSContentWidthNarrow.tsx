// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSContentWidthNarrowSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.5L2 2.5L2 1L14 1L14 2.5ZM3.5 5.5L3.5 10.5L12.5 10.5L12.5 5.5L3.5 5.5ZM3.375 4L12.625 4C13.384 4 14 4.616 14 5.375L14 10.625C14 11.384 13.384 12 12.625 12L3.375 12C2.616 12 2 11.384 2 10.625L2 5.375C2 4.616 2.616 4 3.375 4ZM14 15L2 15L2 13.5L14 13.5L14 15Z"/>
  </svg>
);

const aDSContentWidthNarrowIconDefinition = svgToIconDefinition(
  aDSContentWidthNarrowSvg,
  'ads-content-width-narrow'
);

/**![ADSContentWidthNarrow](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDIuNUwyIDIuNUwyIDFMMTQgMUwxNCAyLjVaTTMuNSA1LjVMMy41IDEwLjVMMTIuNSAxMC41TDEyLjUgNS41TDMuNSA1LjVaTTMuMzc1IDRMMTIuNjI1IDRDMTMuMzg0IDQgMTQgNC42MTYgMTQgNS4zNzVMMTQgMTAuNjI1QzE0IDExLjM4NCAxMy4zODQgMTIgMTIuNjI1IDEyTDMuMzc1IDEyQzIuNjE2IDEyIDIgMTEuMzg0IDIgMTAuNjI1TDIgNS4zNzVDMiA0LjYxNiAyLjYxNiA0IDMuMzc1IDRaTTE0IDE1TDIgMTVMMiAxMy41TDE0IDEzLjVMMTQgMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSContentWidthNarrowIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSContentWidthNarrow';
}

export default RefIcon;
