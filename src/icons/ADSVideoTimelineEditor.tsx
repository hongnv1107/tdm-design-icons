// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoTimelineEditorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSVideoTimelineEditor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04Ljc1IDE2TDguNzUgMEw3LjI1IDBMNy4yNSAxNkg4Ljc1Wk0wIDRMMCAxMkMwIDEzLjEwNSAwLjg5NSAxNCAyIDE0SDVWMTIuNUgyQzEuNzI0IDEyLjUgMS41IDEyLjI3NiAxLjUgMTJMMS41IDRDMS41IDMuNzI0IDEuNzI0IDMuNSAyIDMuNUw1IDMuNVYyTDIgMkMwLjg5NSAyIDAgMi44OTUgMCA0Wk0xNC41IDRMMTQuNSAxMkMxNC41IDEyLjI3NiAxNC4yNzYgMTIuNSAxNCAxMi41TDExIDEyLjVWMTRMMTQgMTRDMTUuMTA1IDE0IDE2IDEzLjEwNSAxNiAxMlY0QzE2IDIuODk1IDE1LjEwNSAyIDE0IDJMMTEgMlYzLjVMMTQgMy41QzE0LjI3NiAzLjUgMTQuNSAzLjcyNCAxNC41IDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoTimelineEditorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoTimelineEditor';
}

export default RefIcon;
