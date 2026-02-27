// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const unlockFilledSvg = (
  <svg
    width="21"
    height="18"
    viewBox="0 0 21 18"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.1875 2.25C13.6055 2.25 12.375 3.51562 12.375 5.0625V6.75H13.5C14.7305 6.75 15.75 7.76953 15.75 9V15.75C15.75 17.0156 14.7305 18 13.5 18H2.25C0.984375 18 0 17.0156 0 15.75V9C0 7.76953 0.984375 6.75 2.25 6.75H10.125V5.0625C10.125 2.28516 12.375 0 15.1875 0C17.9648 0 20.25 2.28516 20.25 5.0625V6.75C20.25 7.38281 19.7227 7.875 19.125 7.875C18.4922 7.875 18 7.38281 18 6.75V5.0625C18 3.51562 16.7344 2.25 15.1875 2.25ZM9 13.5C9.59766 13.5 10.125 13.0078 10.125 12.375C10.125 11.7773 9.59766 11.25 9 11.25H6.75C6.11719 11.25 5.625 11.7773 5.625 12.375C5.625 13.0078 6.11719 13.5 6.75 13.5H9Z"/>
  </svg>
);

const unlockFilledIconDefinition = svgToIconDefinition(
  unlockFilledSvg,
  'unlock-filled'
);

/**![UnlockFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMSAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuMTg3NSAyLjI1QzEzLjYwNTUgMi4yNSAxMi4zNzUgMy41MTU2MiAxMi4zNzUgNS4wNjI1VjYuNzVIMTMuNUMxNC43MzA1IDYuNzUgMTUuNzUgNy43Njk1MyAxNS43NSA5VjE1Ljc1QzE1Ljc1IDE3LjAxNTYgMTQuNzMwNSAxOCAxMy41IDE4SDIuMjVDMC45ODQzNzUgMTggMCAxNy4wMTU2IDAgMTUuNzVWOUMwIDcuNzY5NTMgMC45ODQzNzUgNi43NSAyLjI1IDYuNzVIMTAuMTI1VjUuMDYyNUMxMC4xMjUgMi4yODUxNiAxMi4zNzUgMCAxNS4xODc1IDBDMTcuOTY0OCAwIDIwLjI1IDIuMjg1MTYgMjAuMjUgNS4wNjI1VjYuNzVDMjAuMjUgNy4zODI4MSAxOS43MjI3IDcuODc1IDE5LjEyNSA3Ljg3NUMxOC40OTIyIDcuODc1IDE4IDcuMzgyODEgMTggNi43NVY1LjA2MjVDMTggMy41MTU2MiAxNi43MzQ0IDIuMjUgMTUuMTg3NSAyLjI1Wk05IDEzLjVDOS41OTc2NiAxMy41IDEwLjEyNSAxMy4wMDc4IDEwLjEyNSAxMi4zNzVDMTAuMTI1IDExLjc3NzMgOS41OTc2NiAxMS4yNSA5IDExLjI1SDYuNzVDNi4xMTcxOSAxMS4yNSA1LjYyNSAxMS43NzczIDUuNjI1IDEyLjM3NUM1LjYyNSAxMy4wMDc4IDYuMTE3MTkgMTMuNSA2Ljc1IDEzLjVIOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={unlockFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnlockFilledIcon';
}

export default RefIcon;
