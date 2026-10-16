// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareDefectSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H9.745L8.888 4.5H10.25C10.502 4.5 10.737 4.627 10.876 4.837C11.015 5.047 11.039 5.314 10.94 5.546L9.439 9.046L8.061 8.454L9.112 6H7.75C7.498 6 7.263 5.873 7.124 5.663C6.985 5.453 6.961 5.186 7.061 4.954L8.112 2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V3ZM15 10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V10Z"/>
  </svg>
);

const aDSHardwareDefectIconDefinition = svgToIconDefinition(
  aDSHardwareDefectSvg,
  'ads-hardware-defect'
);

/**![ADSHardwareDefect](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUg5Ljc0NUw4Ljg4OCA0LjVIMTAuMjVDMTAuNTAyIDQuNSAxMC43MzcgNC42MjcgMTAuODc2IDQuODM3QzExLjAxNSA1LjA0NyAxMS4wMzkgNS4zMTQgMTAuOTQgNS41NDZMOS40MzkgOS4wNDZMOC4wNjEgOC40NTRMOS4xMTIgNkg3Ljc1QzcuNDk4IDYgNy4yNjMgNS44NzMgNy4xMjQgNS42NjNDNi45ODUgNS40NTMgNi45NjEgNS4xODYgNy4wNjEgNC45NTRMOC4xMTIgMi41SDNDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxMEMyLjUgMTAuMjc2IDIuNzI0IDEwLjUgMyAxMC41SDEzQzEzLjI3NiAxMC41IDEzLjUgMTAuMjc2IDEzLjUgMTBWM1pNMTUgMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkg4Ljc1VjEzLjVIMTJWMTVINFYxMy41SDcuMjVWMTJIM0MxLjg5NSAxMiAxIDExLjEwNSAxIDEwVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareDefectIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareDefect';
}

export default RefIcon;
