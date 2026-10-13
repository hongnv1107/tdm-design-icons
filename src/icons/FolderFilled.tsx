// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const folderFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 22.5C2.15625 22.4688 1.45312 22.1719 0.890625 21.6094C0.328125 21.0469 0.03125 20.3438 0 19.5V4.5C0.03125 3.65625 0.328125 2.95312 0.890625 2.39062C1.45312 1.82812 2.15625 1.53125 3 1.5H9C10 1.53125 10.7969 1.9375 11.3906 2.71875L12.2812 3.89062C12.5938 4.29688 13 4.5 13.5 4.5H21C21.8438 4.53125 22.5469 4.82812 23.1094 5.39062C23.6719 5.95312 23.9688 6.65625 24 7.5V19.5C23.9688 20.3438 23.6719 21.0469 23.1094 21.6094C22.5469 22.1719 21.8438 22.4688 21 22.5H3Z"/>
  </svg>
);

const folderFilledIconDefinition = svgToIconDefinition(
  folderFilledSvg,
  'folder-filled'
);

/**![FolderFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyAyMi41QzIuMTU2MjUgMjIuNDY4OCAxLjQ1MzEyIDIyLjE3MTkgMC44OTA2MjUgMjEuNjA5NEMwLjMyODEyNSAyMS4wNDY5IDAuMDMxMjUgMjAuMzQzOCAwIDE5LjVWNC41QzAuMDMxMjUgMy42NTYyNSAwLjMyODEyNSAyLjk1MzEyIDAuODkwNjI1IDIuMzkwNjJDMS40NTMxMiAxLjgyODEyIDIuMTU2MjUgMS41MzEyNSAzIDEuNUg5QzEwIDEuNTMxMjUgMTAuNzk2OSAxLjkzNzUgMTEuMzkwNiAyLjcxODc1TDEyLjI4MTIgMy44OTA2MkMxMi41OTM4IDQuMjk2ODggMTMgNC41IDEzLjUgNC41SDIxQzIxLjg0MzggNC41MzEyNSAyMi41NDY5IDQuODI4MTIgMjMuMTA5NCA1LjM5MDYyQzIzLjY3MTkgNS45NTMxMiAyMy45Njg4IDYuNjU2MjUgMjQgNy41VjE5LjVDMjMuOTY4OCAyMC4zNDM4IDIzLjY3MTkgMjEuMDQ2OSAyMy4xMDk0IDIxLjYwOTRDMjIuNTQ2OSAyMi4xNzE5IDIxLjg0MzggMjIuNDY4OCAyMSAyMi41SDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={folderFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderFilled';
}

export default RefIcon;
