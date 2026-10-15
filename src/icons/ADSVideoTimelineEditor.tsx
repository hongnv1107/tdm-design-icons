// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoTimelineEditorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.75 16L8.75 0L7.25 0L7.25 16H8.75ZM0 4L0 12C0 13.105 0.895 14 2 14H5V12.5H2C1.724 12.5 1.5 12.276 1.5 12L1.5 4C1.5 3.724 1.724 3.5 2 3.5L5 3.5V2L2 2C0.895 2 0 2.895 0 4ZM14.5 4L14.5 12C14.5 12.276 14.276 12.5 14 12.5L11 12.5V14L14 14C15.105 14 16 13.105 16 12V4C16 2.895 15.105 2 14 2L11 2V3.5L14 3.5C14.276 3.5 14.5 3.724 14.5 4Z"/>
  </svg>
);

const aDSVideoTimelineEditorIconDefinition = svgToIconDefinition(
  aDSVideoTimelineEditorSvg,
  'ads-video-timeline-editor'
);

/**![ADSVideoTimelineEditor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC43NSAxNkw4Ljc1IDBMNy4yNSAwTDcuMjUgMTZIOC43NVpNMCA0TDAgMTJDMCAxMy4xMDUgMC44OTUgMTQgMiAxNEg1VjEyLjVIMkMxLjcyNCAxMi41IDEuNSAxMi4yNzYgMS41IDEyTDEuNSA0QzEuNSAzLjcyNCAxLjcyNCAzLjUgMiAzLjVMNSAzLjVWMkwyIDJDMC44OTUgMiAwIDIuODk1IDAgNFpNMTQuNSA0TDE0LjUgMTJDMTQuNSAxMi4yNzYgMTQuMjc2IDEyLjUgMTQgMTIuNUwxMSAxMi41VjE0TDE0IDE0QzE1LjEwNSAxNCAxNiAxMy4xMDUgMTYgMTJWNEMxNiAyLjg5NSAxNS4xMDUgMiAxNCAyTDExIDJWMy41TDE0IDMuNUMxNC4yNzYgMy41IDE0LjUgMy43MjQgMTQuNSA0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoTimelineEditorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoTimelineEditor';
}

export default RefIcon;
