// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataFunctionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 1V2.5H4.574L9.768 7.457C9.916 7.599 10 7.795 10 8C10 8.205 9.916 8.401 9.768 8.543L4.574 13.5H13V15H3.75C3.336 15 3 14.664 3 14.25V13.25C3 13.045 3.084 12.849 3.232 12.707L8.163 8L3.232 3.293C3.084 3.151 3 2.955 3 2.75V1.75C3 1.336 3.336 1 3.75 1H13Z"/>
  </svg>
);

const aDSDataFunctionIconDefinition = svgToIconDefinition(
  aDSDataFunctionSvg,
  'ads-data-function'
);

/**![ADSDataFunction](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgMVYyLjVINC41NzRMOS43NjggNy40NTdDOS45MTYgNy41OTkgMTAgNy43OTUgMTAgOEMxMCA4LjIwNSA5LjkxNiA4LjQwMSA5Ljc2OCA4LjU0M0w0LjU3NCAxMy41SDEzVjE1SDMuNzVDMy4zMzYgMTUgMyAxNC42NjQgMyAxNC4yNVYxMy4yNUMzIDEzLjA0NSAzLjA4NCAxMi44NDkgMy4yMzIgMTIuNzA3TDguMTYzIDhMMy4yMzIgMy4yOTNDMy4wODQgMy4xNTEgMyAyLjk1NSAzIDIuNzVWMS43NUMzIDEuMzM2IDMuMzM2IDEgMy43NSAxSDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataFunctionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataFunction';
}

export default RefIcon;
