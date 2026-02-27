// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const emailOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 8.63965L12.5625 13.7021C12.2231 13.9329 11.7769 13.9329 11.4375 13.7021L4 8.63965V17.25C4 17.6338 4.33545 17.9999 4.7998 18H19.2002C19.6646 17.9999 20 17.6338 20 17.25V8.63965ZM4.71484 6.00391C4.47392 6.0277 4.275 6.15224 4.14844 6.32129L12 11.665L19.8506 6.32129C19.724 6.15248 19.5259 6.02768 19.2852 6.00391L19.2002 6H4.7998L4.71484 6.00391ZM22 17.25C22 18.7911 20.7157 19.9999 19.2002 20H4.7998C3.28435 19.9999 2 18.7911 2 17.25V6.75C2 5.20891 3.28435 4.0001 4.7998 4H19.2002L19.4814 4.01367C20.8712 4.15222 22 5.30524 22 6.75V17.25Z"/>
  </svg>
);

const emailOutlinedIconDefinition = svgToIconDefinition(
  emailOutlinedSvg,
  'email-outlined'
);

/**![EmailOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgOC42Mzk2NUwxMi41NjI1IDEzLjcwMjFDMTIuMjIzMSAxMy45MzI5IDExLjc3NjkgMTMuOTMyOSAxMS40Mzc1IDEzLjcwMjFMNCA4LjYzOTY1VjE3LjI1QzQgMTcuNjMzOCA0LjMzNTQ1IDE3Ljk5OTkgNC43OTk4IDE4SDE5LjIwMDJDMTkuNjY0NiAxNy45OTk5IDIwIDE3LjYzMzggMjAgMTcuMjVWOC42Mzk2NVpNNC43MTQ4NCA2LjAwMzkxQzQuNDczOTIgNi4wMjc3IDQuMjc1IDYuMTUyMjQgNC4xNDg0NCA2LjMyMTI5TDEyIDExLjY2NUwxOS44NTA2IDYuMzIxMjlDMTkuNzI0IDYuMTUyNDggMTkuNTI1OSA2LjAyNzY4IDE5LjI4NTIgNi4wMDM5MUwxOS4yMDAyIDZINC43OTk4TDQuNzE0ODQgNi4wMDM5MVpNMjIgMTcuMjVDMjIgMTguNzkxMSAyMC43MTU3IDE5Ljk5OTkgMTkuMjAwMiAyMEg0Ljc5OThDMy4yODQzNSAxOS45OTk5IDIgMTguNzkxMSAyIDE3LjI1VjYuNzVDMiA1LjIwODkxIDMuMjg0MzUgNC4wMDAxIDQuNzk5OCA0SDE5LjIwMDJMMTkuNDgxNCA0LjAxMzY3QzIwLjg3MTIgNC4xNTIyMiAyMiA1LjMwNTI0IDIyIDYuNzVWMTcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={emailOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EmailOutlinedIcon';
}

export default RefIcon;
