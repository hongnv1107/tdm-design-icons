// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDefectSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H9.513L8.347 5.5H10.25C10.498 5.5 10.729 5.622 10.869 5.826C11.009 6.03 11.039 6.291 10.949 6.521L9.199 11.022L7.801 10.479L9.153 7H7.25C7.002 7 6.771 6.878 6.631 6.674C6.491 6.47 6.461 6.209 6.551 5.979L7.903 2.5H3C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3ZM15 13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13Z"/>
  </svg>
);

const aDSDefectIconDefinition = svgToIconDefinition(
  aDSDefectSvg,
  'ads-defect'
);

/**![ADSDefect](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUg5LjUxM0w4LjM0NyA1LjVIMTAuMjVDMTAuNDk4IDUuNSAxMC43MjkgNS42MjIgMTAuODY5IDUuODI2QzExLjAwOSA2LjAzIDExLjAzOSA2LjI5MSAxMC45NDkgNi41MjFMOS4xOTkgMTEuMDIyTDcuODAxIDEwLjQ3OUw5LjE1MyA3SDcuMjVDNy4wMDIgNyA2Ljc3MSA2Ljg3OCA2LjYzMSA2LjY3NEM2LjQ5MSA2LjQ3IDYuNDYxIDYuMjA5IDYuNTUxIDUuOTc5TDcuOTAzIDIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjNaTTE1IDEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDefectIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDefect';
}

export default RefIcon;
