// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataZeroFillSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 5.759L4.871 11.944C5.382 12.871 6.367 13.5 7.5 13.5H8.5C10.157 13.5 11.5 12.157 11.5 10.5V5.759ZM13 10.5C13 12.985 10.985 15 8.5 15H7.5C5.015 15 3 12.985 3 10.5V5.5C3 3.015 5.015 1 7.5 1H8.5C10.985 1 13 3.015 13 5.5V10.5ZM4.5 10.241L11.128 4.055C10.617 3.128 9.633 2.5 8.5 2.5H7.5C5.843 2.5 4.5 3.843 4.5 5.5V10.241Z"/>
  </svg>
);

const aDSDataZeroFillIconDefinition = svgToIconDefinition(
  aDSDataZeroFillSvg,
  'ads-data-zero-fill'
);

/**![ADSDataZeroFill](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNSA1Ljc1OUw0Ljg3MSAxMS45NDRDNS4zODIgMTIuODcxIDYuMzY3IDEzLjUgNy41IDEzLjVIOC41QzEwLjE1NyAxMy41IDExLjUgMTIuMTU3IDExLjUgMTAuNVY1Ljc1OVpNMTMgMTAuNUMxMyAxMi45ODUgMTAuOTg1IDE1IDguNSAxNUg3LjVDNS4wMTUgMTUgMyAxMi45ODUgMyAxMC41VjUuNUMzIDMuMDE1IDUuMDE1IDEgNy41IDFIOC41QzEwLjk4NSAxIDEzIDMuMDE1IDEzIDUuNVYxMC41Wk00LjUgMTAuMjQxTDExLjEyOCA0LjA1NUMxMC42MTcgMy4xMjggOS42MzMgMi41IDguNSAyLjVINy41QzUuODQzIDIuNSA0LjUgMy44NDMgNC41IDUuNVYxMC4yNDFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataZeroFillIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataZeroFill';
}

export default RefIcon;
