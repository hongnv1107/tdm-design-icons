// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const clapperboardOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.25 9.75V19.5C2.28125 19.9688 2.53125 20.2188 3 20.25H21C21.4688 20.2188 21.7188 19.9688 21.75 19.5V9.75H2.25ZM18.75 7.5L21.75 4.5C21.7188 4.03125 21.4688 3.78125 21 3.75H19.5L15.75 7.5H18.75ZM15 3.75H12L8.25 7.5H11.25L15 3.75ZM7.5 3.75H4.5L2.25 6V7.5H3.75L7.5 3.75ZM24 19.5C23.9688 20.3438 23.6719 21.0469 23.1094 21.6094C22.5469 22.1719 21.8438 22.4688 21 22.5H3C2.15625 22.4688 1.45312 22.1719 0.890625 21.6094C0.328125 21.0469 0.03125 20.3438 0 19.5V4.5C0.03125 3.65625 0.328125 2.95312 0.890625 2.39062C1.45312 1.82812 2.15625 1.53125 3 1.5H21C21.8438 1.53125 22.5469 1.82812 23.1094 2.39062C23.6719 2.95312 23.9688 3.65625 24 4.5V19.5Z"/>
  </svg>
);

const clapperboardOutlinedIconDefinition = svgToIconDefinition(
  clapperboardOutlinedSvg,
  'clapperboard-outlined'
);

/**![ClapperboardOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi4yNSA5Ljc1VjE5LjVDMi4yODEyNSAxOS45Njg4IDIuNTMxMjUgMjAuMjE4OCAzIDIwLjI1SDIxQzIxLjQ2ODggMjAuMjE4OCAyMS43MTg4IDE5Ljk2ODggMjEuNzUgMTkuNVY5Ljc1SDIuMjVaTTE4Ljc1IDcuNUwyMS43NSA0LjVDMjEuNzE4OCA0LjAzMTI1IDIxLjQ2ODggMy43ODEyNSAyMSAzLjc1SDE5LjVMMTUuNzUgNy41SDE4Ljc1Wk0xNSAzLjc1SDEyTDguMjUgNy41SDExLjI1TDE1IDMuNzVaTTcuNSAzLjc1SDQuNUwyLjI1IDZWNy41SDMuNzVMNy41IDMuNzVaTTI0IDE5LjVDMjMuOTY4OCAyMC4zNDM4IDIzLjY3MTkgMjEuMDQ2OSAyMy4xMDk0IDIxLjYwOTRDMjIuNTQ2OSAyMi4xNzE5IDIxLjg0MzggMjIuNDY4OCAyMSAyMi41SDNDMi4xNTYyNSAyMi40Njg4IDEuNDUzMTIgMjIuMTcxOSAwLjg5MDYyNSAyMS42MDk0QzAuMzI4MTI1IDIxLjA0NjkgMC4wMzEyNSAyMC4zNDM4IDAgMTkuNVY0LjVDMC4wMzEyNSAzLjY1NjI1IDAuMzI4MTI1IDIuOTUzMTIgMC44OTA2MjUgMi4zOTA2MkMxLjQ1MzEyIDEuODI4MTIgMi4xNTYyNSAxLjUzMTI1IDMgMS41SDIxQzIxLjg0MzggMS41MzEyNSAyMi41NDY5IDEuODI4MTIgMjMuMTA5NCAyLjM5MDYyQzIzLjY3MTkgMi45NTMxMiAyMy45Njg4IDMuNjU2MjUgMjQgNC41VjE5LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={clapperboardOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClapperboardOutlined';
}

export default RefIcon;
