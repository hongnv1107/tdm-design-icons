// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChatWidgetSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V9H12.5V5.5H3.5V12C3.5 12.276 3.724 12.5 4 12.5H9V14H4C2.895 14 2 13.105 2 12V2ZM3.5 4H12.5V2C12.5 1.724 12.276 1.5 12 1.5H4C3.724 1.5 3.5 1.724 3.5 2V4ZM13.25 12C12.56 12 12 12.56 12 13.25C12 13.94 12.56 14.5 13.25 14.5C13.94 14.5 14.5 13.94 14.5 13.25C14.5 12.56 13.94 12 13.25 12ZM10.5 13.25C10.5 11.731 11.731 10.5 13.25 10.5C14.769 10.5 16 11.731 16 13.25C16 14.769 14.769 16 13.25 16C11.731 16 10.5 14.769 10.5 13.25Z"/>
  </svg>
);

const aDSChatWidgetIconDefinition = svgToIconDefinition(
  aDSChatWidgetSvg,
  'ads-chat-widget'
);

/**![ADSChatWidget](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyQzIgMC44OTUgMi44OTUgMCA0IDBIMTJDMTMuMTA1IDAgMTQgMC44OTUgMTQgMlY5SDEyLjVWNS41SDMuNVYxMkMzLjUgMTIuMjc2IDMuNzI0IDEyLjUgNCAxMi41SDlWMTRINEMyLjg5NSAxNCAyIDEzLjEwNSAyIDEyVjJaTTMuNSA0SDEyLjVWMkMxMi41IDEuNzI0IDEyLjI3NiAxLjUgMTIgMS41SDRDMy43MjQgMS41IDMuNSAxLjcyNCAzLjUgMlY0Wk0xMy4yNSAxMkMxMi41NiAxMiAxMiAxMi41NiAxMiAxMy4yNUMxMiAxMy45NCAxMi41NiAxNC41IDEzLjI1IDE0LjVDMTMuOTQgMTQuNSAxNC41IDEzLjk0IDE0LjUgMTMuMjVDMTQuNSAxMi41NiAxMy45NCAxMiAxMy4yNSAxMlpNMTAuNSAxMy4yNUMxMC41IDExLjczMSAxMS43MzEgMTAuNSAxMy4yNSAxMC41QzE0Ljc2OSAxMC41IDE2IDExLjczMSAxNiAxMy4yNUMxNiAxNC43NjkgMTQuNzY5IDE2IDEzLjI1IDE2QzExLjczMSAxNiAxMC41IDE0Ljc2OSAxMC41IDEzLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChatWidgetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChatWidget';
}

export default RefIcon;
