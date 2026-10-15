// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBrowserExtensionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 2V2.5H11.5C12.605 2.5 13.5 3.395 13.5 4.5V6.75H14C15.105 6.75 16 7.645 16 8.75C16 9.855 15.105 10.75 14 10.75H13.5V13C13.5 14.105 12.605 15 11.5 15H3C1.895 15 1 14.105 1 13V10.75C1 10.336 1.336 10 1.75 10H2.25C2.94 10 3.5 9.44 3.5 8.75C3.5 8.06 2.94 7.5 2.25 7.5H1.75C1.336 7.5 1 7.164 1 6.75V4.5C1 3.395 1.895 2.5 3 2.5H5.25V2C5.25 0.895 6.145 0 7.25 0C8.355 0 9.25 0.895 9.25 2ZM2.5 4.5C2.5 4.224 2.724 4 3 4H11.5C11.776 4 12 4.224 12 4.5V13C12 13.276 11.776 13.5 11.5 13.5H3C2.724 13.5 2.5 13.276 2.5 13V11.489C3.902 11.363 5 10.185 5 8.75C5 7.315 3.902 6.138 2.5 6.011V4.5Z"/>
  </svg>
);

const aDSBrowserExtensionIconDefinition = svgToIconDefinition(
  aDSBrowserExtensionSvg,
  'ads-browser-extension'
);

/**![ADSBrowserExtension](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjUgMlYyLjVIMTEuNUMxMi42MDUgMi41IDEzLjUgMy4zOTUgMTMuNSA0LjVWNi43NUgxNEMxNS4xMDUgNi43NSAxNiA3LjY0NSAxNiA4Ljc1QzE2IDkuODU1IDE1LjEwNSAxMC43NSAxNCAxMC43NUgxMy41VjEzQzEzLjUgMTQuMTA1IDEyLjYwNSAxNSAxMS41IDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YxMC43NUMxIDEwLjMzNiAxLjMzNiAxMCAxLjc1IDEwSDIuMjVDMi45NCAxMCAzLjUgOS40NCAzLjUgOC43NUMzLjUgOC4wNiAyLjk0IDcuNSAyLjI1IDcuNUgxLjc1QzEuMzM2IDcuNSAxIDcuMTY0IDEgNi43NVY0LjVDMSAzLjM5NSAxLjg5NSAyLjUgMyAyLjVINS4yNVYyQzUuMjUgMC44OTUgNi4xNDUgMCA3LjI1IDBDOC4zNTUgMCA5LjI1IDAuODk1IDkuMjUgMlpNMi41IDQuNUMyLjUgNC4yMjQgMi43MjQgNCAzIDRIMTEuNUMxMS43NzYgNCAxMiA0LjIyNCAxMiA0LjVWMTNDMTIgMTMuMjc2IDExLjc3NiAxMy41IDExLjUgMTMuNUgzQzIuNzI0IDEzLjUgMi41IDEzLjI3NiAyLjUgMTNWMTEuNDg5QzMuOTAyIDExLjM2MyA1IDEwLjE4NSA1IDguNzVDNSA3LjMxNSAzLjkwMiA2LjEzOCAyLjUgNi4wMTFWNC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBrowserExtensionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBrowserExtension';
}

export default RefIcon;
