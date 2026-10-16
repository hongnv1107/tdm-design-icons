// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChatWidgetSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSChatWidget](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMkMyIDAuODk1IDIuODk1IDAgNCAwSDEyQzEzLjEwNSAwIDE0IDAuODk1IDE0IDJWOUgxMi41VjUuNUgzLjVWMTJDMy41IDEyLjI3NiAzLjcyNCAxMi41IDQgMTIuNUg5VjE0SDRDMi44OTUgMTQgMiAxMy4xMDUgMiAxMlYyWk0zLjUgNEgxMi41VjJDMTIuNSAxLjcyNCAxMi4yNzYgMS41IDEyIDEuNUg0QzMuNzI0IDEuNSAzLjUgMS43MjQgMy41IDJWNFpNMTMuMjUgMTJDMTIuNTYgMTIgMTIgMTIuNTYgMTIgMTMuMjVDMTIgMTMuOTQgMTIuNTYgMTQuNSAxMy4yNSAxNC41QzEzLjk0IDE0LjUgMTQuNSAxMy45NCAxNC41IDEzLjI1QzE0LjUgMTIuNTYgMTMuOTQgMTIgMTMuMjUgMTJaTTEwLjUgMTMuMjVDMTAuNSAxMS43MzEgMTEuNzMxIDEwLjUgMTMuMjUgMTAuNUMxNC43NjkgMTAuNSAxNiAxMS43MzEgMTYgMTMuMjVDMTYgMTQuNzY5IDE0Ljc2OSAxNiAxMy4yNSAxNkMxMS43MzEgMTYgMTAuNSAxNC43NjkgMTAuNSAxMy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChatWidgetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChatWidget';
}

export default RefIcon;
