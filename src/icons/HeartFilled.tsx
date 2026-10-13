// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const heartFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.25 13.8203C0.78125 12.4453 0.03125 10.7422 0 8.71094V8.42969C0.03125 6.74219 0.5625 5.30469 1.59375 4.11719C2.625 2.89844 3.95312 2.13281 5.57812 1.82031C6.67188 1.66406 7.73438 1.74219 8.76562 2.05469C9.76562 2.36719 10.6562 2.91406 11.4375 3.69531L12 4.25781L12.5625 3.69531C13.3438 2.91406 14.2344 2.36719 15.2344 2.05469C16.2656 1.74219 17.3281 1.66406 18.4219 1.82031C20.0469 2.13281 21.375 2.89844 22.4062 4.11719C23.4375 5.30469 23.9688 6.74219 24 8.42969V8.71094C23.9688 10.7422 23.2188 12.4453 21.75 13.8203L13.3125 21.7422C12.9375 22.0859 12.5 22.2578 12 22.2578C11.5 22.2578 11.0625 22.0859 10.6875 21.7422L2.25 13.8203Z"/>
  </svg>
);

const heartFilledIconDefinition = svgToIconDefinition(
  heartFilledSvg,
  'heart-filled'
);

/**![HeartFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi4yNSAxMy44MjAzQzAuNzgxMjUgMTIuNDQ1MyAwLjAzMTI1IDEwLjc0MjIgMCA4LjcxMDk0VjguNDI5NjlDMC4wMzEyNSA2Ljc0MjE5IDAuNTYyNSA1LjMwNDY5IDEuNTkzNzUgNC4xMTcxOUMyLjYyNSAyLjg5ODQ0IDMuOTUzMTIgMi4xMzI4MSA1LjU3ODEyIDEuODIwMzFDNi42NzE4OCAxLjY2NDA2IDcuNzM0MzggMS43NDIxOSA4Ljc2NTYyIDIuMDU0NjlDOS43NjU2MiAyLjM2NzE5IDEwLjY1NjIgMi45MTQwNiAxMS40Mzc1IDMuNjk1MzFMMTIgNC4yNTc4MUwxMi41NjI1IDMuNjk1MzFDMTMuMzQzOCAyLjkxNDA2IDE0LjIzNDQgMi4zNjcxOSAxNS4yMzQ0IDIuMDU0NjlDMTYuMjY1NiAxLjc0MjE5IDE3LjMyODEgMS42NjQwNiAxOC40MjE5IDEuODIwMzFDMjAuMDQ2OSAyLjEzMjgxIDIxLjM3NSAyLjg5ODQ0IDIyLjQwNjIgNC4xMTcxOUMyMy40Mzc1IDUuMzA0NjkgMjMuOTY4OCA2Ljc0MjE5IDI0IDguNDI5NjlWOC43MTA5NEMyMy45Njg4IDEwLjc0MjIgMjMuMjE4OCAxMi40NDUzIDIxLjc1IDEzLjgyMDNMMTMuMzEyNSAyMS43NDIyQzEyLjkzNzUgMjIuMDg1OSAxMi41IDIyLjI1NzggMTIgMjIuMjU3OEMxMS41IDIyLjI1NzggMTEuMDYyNSAyMi4wODU5IDEwLjY4NzUgMjEuNzQyMkwyLjI1IDEzLjgyMDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={heartFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HeartFilled';
}

export default RefIcon;
