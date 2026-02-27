// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const emailFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 17.25C22 18.7911 20.7157 19.9999 19.2002 20H4.7998C3.28435 19.9999 2 18.7911 2 17.25V11.75L2.00977 11.6123C2.05358 11.2969 2.2459 11.0178 2.53223 10.8662C2.85962 10.693 3.25623 10.7146 3.5625 10.9229L12 16.6651L20.4375 10.9229C20.7438 10.7146 21.1404 10.693 21.4678 10.8662C21.7952 11.0395 22 11.3796 22 11.75V17.25Z"/><path d="M19.2002 4C20.7157 4.0001 22 5.20891 22 6.75C22 7.08097 21.8361 7.39094 21.5625 7.57715L12.5625 13.7021C12.2231 13.9329 11.7769 13.9329 11.4375 13.7021L2.4375 7.57715C2.16388 7.39094 2 7.08097 2 6.75C2 5.20891 3.28435 4.0001 4.7998 4H19.2002Z"/>
  </svg>
);

const emailFilledIconDefinition = svgToIconDefinition(
  emailFilledSvg,
  'email-filled'
);

/**![EmailFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIgMTcuMjVDMjIgMTguNzkxMSAyMC43MTU3IDE5Ljk5OTkgMTkuMjAwMiAyMEg0Ljc5OThDMy4yODQzNSAxOS45OTk5IDIgMTguNzkxMSAyIDE3LjI1VjExLjc1TDIuMDA5NzcgMTEuNjEyM0MyLjA1MzU4IDExLjI5NjkgMi4yNDU5IDExLjAxNzggMi41MzIyMyAxMC44NjYyQzIuODU5NjIgMTAuNjkzIDMuMjU2MjMgMTAuNzE0NiAzLjU2MjUgMTAuOTIyOUwxMiAxNi42NjUxTDIwLjQzNzUgMTAuOTIyOUMyMC43NDM4IDEwLjcxNDYgMjEuMTQwNCAxMC42OTMgMjEuNDY3OCAxMC44NjYyQzIxLjc5NTIgMTEuMDM5NSAyMiAxMS4zNzk2IDIyIDExLjc1VjE3LjI1WiIvPjxwYXRoIGQ9Ik0xOS4yMDAyIDRDMjAuNzE1NyA0LjAwMDEgMjIgNS4yMDg5MSAyMiA2Ljc1QzIyIDcuMDgwOTcgMjEuODM2MSA3LjM5MDk0IDIxLjU2MjUgNy41NzcxNUwxMi41NjI1IDEzLjcwMjFDMTIuMjIzMSAxMy45MzI5IDExLjc3NjkgMTMuOTMyOSAxMS40Mzc1IDEzLjcwMjFMMi40Mzc1IDcuNTc3MTVDMi4xNjM4OCA3LjM5MDk0IDIgNy4wODA5NyAyIDYuNzVDMiA1LjIwODkxIDMuMjg0MzUgNC4wMDAxIDQuNzk5OCA0SDE5LjIwMDJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={emailFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EmailFilledIcon';
}

export default RefIcon;
