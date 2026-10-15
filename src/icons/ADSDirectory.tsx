// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDirectorySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 3C13 2.724 12.776 2.5 12.5 2.5H3.5C3.224 2.5 3 2.724 3 3V13C3 13.276 3.224 13.5 3.5 13.5H12.5C12.776 13.5 13 13.276 13 13V3ZM14.5 13C14.5 14.105 13.605 15 12.5 15H3.5C2.395 15 1.5 14.105 1.5 13V11.5H0V10H1.5V6H0V4.5H1.5V3C1.5 1.895 2.395 1 3.5 1H12.5C13.605 1 14.5 1.895 14.5 3V13Z"/><path d="M8.75 9C9.855 9 10.75 9.895 10.75 11V11.25C10.75 11.664 10.414 12 10 12H6C5.586 12 5.25 11.664 5.25 11.25V11C5.25 9.895 6.145 9 7.25 9H8.75Z"/><path d="M8 4.5C8.967 4.5 9.75 5.284 9.75 6.25C9.75 7.217 8.967 8 8 8C7.034 8 6.25 7.217 6.25 6.25C6.25 5.284 7.034 4.5 8 4.5Z"/>
  </svg>
);

const aDSDirectoryIconDefinition = svgToIconDefinition(
  aDSDirectorySvg,
  'ads-directory'
);

/**![ADSDirectory](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgM0MxMyAyLjcyNCAxMi43NzYgMi41IDEyLjUgMi41SDMuNUMzLjIyNCAyLjUgMyAyLjcyNCAzIDNWMTNDMyAxMy4yNzYgMy4yMjQgMTMuNSAzLjUgMTMuNUgxMi41QzEyLjc3NiAxMy41IDEzIDEzLjI3NiAxMyAxM1YzWk0xNC41IDEzQzE0LjUgMTQuMTA1IDEzLjYwNSAxNSAxMi41IDE1SDMuNUMyLjM5NSAxNSAxLjUgMTQuMTA1IDEuNSAxM1YxMS41SDBWMTBIMS41VjZIMFY0LjVIMS41VjNDMS41IDEuODk1IDIuMzk1IDEgMy41IDFIMTIuNUMxMy42MDUgMSAxNC41IDEuODk1IDE0LjUgM1YxM1oiLz48cGF0aCBkPSJNOC43NSA5QzkuODU1IDkgMTAuNzUgOS44OTUgMTAuNzUgMTFWMTEuMjVDMTAuNzUgMTEuNjY0IDEwLjQxNCAxMiAxMCAxMkg2QzUuNTg2IDEyIDUuMjUgMTEuNjY0IDUuMjUgMTEuMjVWMTFDNS4yNSA5Ljg5NSA2LjE0NSA5IDcuMjUgOUg4Ljc1WiIvPjxwYXRoIGQ9Ik04IDQuNUM4Ljk2NyA0LjUgOS43NSA1LjI4NCA5Ljc1IDYuMjVDOS43NSA3LjIxNyA4Ljk2NyA4IDggOEM3LjAzNCA4IDYuMjUgNy4yMTcgNi4yNSA2LjI1QzYuMjUgNS4yODQgNy4wMzQgNC41IDggNC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDirectoryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDirectory';
}

export default RefIcon;
