// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDividerElementSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 15L14 12.5C14 11.395 13.105 10.5 12 10.5H4C2.895 10.5 2 11.395 2 12.5L2 15H3.5L3.5 12.5C3.5 12.224 3.724 12 4 12H12C12.276 12 12.5 12.224 12.5 12.5L12.5 15L14 15ZM16 7.25H0V8.75H16V7.25ZM2 3.501C2 4.606 2.896 5.5 4 5.5H12C13.105 5.5 14 4.605 14 3.5L14 1L12.5 1L12.5 3.5C12.5 3.776 12.276 4 12 4H4C3.723 4 3.5 3.776 3.5 3.501V1H2V3.501Z"/>
  </svg>
);

const aDSDividerElementIconDefinition = svgToIconDefinition(
  aDSDividerElementSvg,
  'ads-divider-element'
);

/**![ADSDividerElement](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDE1TDE0IDEyLjVDMTQgMTEuMzk1IDEzLjEwNSAxMC41IDEyIDEwLjVINEMyLjg5NSAxMC41IDIgMTEuMzk1IDIgMTIuNUwyIDE1SDMuNUwzLjUgMTIuNUMzLjUgMTIuMjI0IDMuNzI0IDEyIDQgMTJIMTJDMTIuMjc2IDEyIDEyLjUgMTIuMjI0IDEyLjUgMTIuNUwxMi41IDE1TDE0IDE1Wk0xNiA3LjI1SDBWOC43NUgxNlY3LjI1Wk0yIDMuNTAxQzIgNC42MDYgMi44OTYgNS41IDQgNS41SDEyQzEzLjEwNSA1LjUgMTQgNC42MDUgMTQgMy41TDE0IDFMMTIuNSAxTDEyLjUgMy41QzEyLjUgMy43NzYgMTIuMjc2IDQgMTIgNEg0QzMuNzIzIDQgMy41IDMuNzc2IDMuNSAzLjUwMVYxSDJWMy41MDFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDividerElementIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDividerElement';
}

export default RefIcon;
