// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNoteSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V9.75C15 10.269 14.794 10.767 14.427 11.134L11.134 14.427C10.767 14.794 10.269 15 9.75 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H9V9.75C9 9.336 9.336 9 9.75 9H13.5V3C13.5 2.724 13.276 2.5 13 2.5H3ZM12.939 10.5H10.5V12.939L12.939 10.5ZM11 6H4V4.5H11V6ZM7 9.5H4V8H7V9.5Z"/>
  </svg>
);

const aDSNoteIconDefinition = svgToIconDefinition(
  aDSNoteSvg,
  'ads-note'
);

/**![ADSNote](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1Y5Ljc1QzE1IDEwLjI2OSAxNC43OTQgMTAuNzY3IDE0LjQyNyAxMS4xMzRMMTEuMTM0IDE0LjQyN0MxMC43NjcgMTQuNzk0IDEwLjI2OSAxNSA5Ljc1IDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIOVY5Ljc1QzkgOS4zMzYgOS4zMzYgOSA5Ljc1IDlIMTMuNVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM1pNMTIuOTM5IDEwLjVIMTAuNVYxMi45MzlMMTIuOTM5IDEwLjVaTTExIDZINFY0LjVIMTFWNlpNNyA5LjVINFY4SDdWOS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNoteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNote';
}

export default RefIcon;
