// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const zoomOutFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.5096 9.73575C19.5096 11.8889 18.8061 13.9016 17.6336 15.4929L23.5428 21.4374C24.1524 21.999 24.1524 22.982 23.5428 23.5437C22.98 24.1521 21.9951 24.1521 21.4323 23.5437L15.4762 17.5992C13.8818 18.8161 11.8651 19.4715 9.7548 19.4715C4.3615 19.4715 0 15.1185 0 9.73575C0 4.3998 4.3615 0 9.7548 0C15.1011 0 19.5096 4.3998 19.5096 9.73575ZM6.37812 8.61238C5.72154 8.61238 5.25256 9.1272 5.25256 9.73575C5.25256 10.3911 5.72154 10.8591 6.37812 10.8591H13.1315C13.741 10.8591 14.2569 10.3911 14.2569 9.73575C14.2569 9.1272 13.741 8.61238 13.1315 8.61238H6.37812Z"/>
  </svg>
);

const zoomOutFilledIconDefinition = svgToIconDefinition(
  zoomOutFilledSvg,
  'zoom-out-filled'
);

/**![ZoomOutFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkuNTA5NiA5LjczNTc1QzE5LjUwOTYgMTEuODg4OSAxOC44MDYxIDEzLjkwMTYgMTcuNjMzNiAxNS40OTI5TDIzLjU0MjggMjEuNDM3NEMyNC4xNTI0IDIxLjk5OSAyNC4xNTI0IDIyLjk4MiAyMy41NDI4IDIzLjU0MzdDMjIuOTggMjQuMTUyMSAyMS45OTUxIDI0LjE1MjEgMjEuNDMyMyAyMy41NDM3TDE1LjQ3NjIgMTcuNTk5MkMxMy44ODE4IDE4LjgxNjEgMTEuODY1MSAxOS40NzE1IDkuNzU0OCAxOS40NzE1QzQuMzYxNSAxOS40NzE1IDAgMTUuMTE4NSAwIDkuNzM1NzVDMCA0LjM5OTggNC4zNjE1IDAgOS43NTQ4IDBDMTUuMTAxMSAwIDE5LjUwOTYgNC4zOTk4IDE5LjUwOTYgOS43MzU3NVpNNi4zNzgxMiA4LjYxMjM4QzUuNzIxNTQgOC42MTIzOCA1LjI1MjU2IDkuMTI3MiA1LjI1MjU2IDkuNzM1NzVDNS4yNTI1NiAxMC4zOTExIDUuNzIxNTQgMTAuODU5MSA2LjM3ODEyIDEwLjg1OTFIMTMuMTMxNUMxMy43NDEgMTAuODU5MSAxNC4yNTY5IDEwLjM5MTEgMTQuMjU2OSA5LjczNTc1QzE0LjI1NjkgOS4xMjcyIDEzLjc0MSA4LjYxMjM4IDEzLjEzMTUgOC42MTIzOEg2LjM3ODEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={zoomOutFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZoomOutFilled';
}

export default RefIcon;
