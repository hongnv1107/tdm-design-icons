// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const caretUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.7173 8.28125L16.7089 12.2812C17 12.6146 17.0728 12.9792 16.9272 13.375C16.7401 13.7708 16.4283 13.9792 15.9917 14H8.00832C7.57173 13.9792 7.25988 13.7708 7.07277 13.375C6.92723 12.9792 7 12.6146 7.29106 12.2812L11.2827 8.28125C11.4906 8.09375 11.7297 8 12 8C12.2703 8 12.5094 8.09375 12.7173 8.28125Z" />
  </svg>
);

const caretUpFilledIconDefinition = svgToIconDefinition(
  caretUpFilledSvg,
  'caret-up-filled'
);

/**![CaretUpFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNzE3MyA4LjI4MTI1TDE2LjcwODkgMTIuMjgxMkMxNyAxMi42MTQ2IDE3LjA3MjggMTIuOTc5MiAxNi45MjcyIDEzLjM3NUMxNi43NDAxIDEzLjc3MDggMTYuNDI4MyAxMy45NzkyIDE1Ljk5MTcgMTRIOC4wMDgzMkM3LjU3MTczIDEzLjk3OTIgNy4yNTk4OCAxMy43NzA4IDcuMDcyNzcgMTMuMzc1QzYuOTI3MjMgMTIuOTc5MiA3IDEyLjYxNDYgNy4yOTEwNiAxMi4yODEyTDExLjI4MjcgOC4yODEyNUMxMS40OTA2IDguMDkzNzUgMTEuNzI5NyA4IDEyIDhDMTIuMjcwMyA4IDEyLjUwOTQgOC4wOTM3NSAxMi43MTczIDguMjgxMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={caretUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretUpFilledIcon';
}

export default RefIcon;
