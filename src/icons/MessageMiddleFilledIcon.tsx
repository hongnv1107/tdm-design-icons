// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const messageMiddleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.0938 17.625L12.4219 20.7891C12.3047 20.9297 12.1641 21 12 21C11.8125 21 11.6719 20.9297 11.5781 20.7891L8.94141 17.625H5.25C4.61719 17.6016 4.08984 17.3789 3.66797 16.957C3.24609 16.5352 3.02344 16.0078 3 15.375V5.25C3.02344 4.61719 3.24609 4.08984 3.66797 3.66797C4.08984 3.24609 4.61719 3.02344 5.25 3H18.75C19.3828 3.02344 19.9102 3.24609 20.332 3.66797C20.7539 4.08984 20.9766 4.61719 21 5.25V15.375C20.9766 16.0078 20.7539 16.5352 20.332 16.957C19.9102 17.3789 19.3828 17.6016 18.75 17.625H15.0938Z"/>
  </svg>
);

const messageMiddleFilledIconDefinition = svgToIconDefinition(
  messageMiddleFilledSvg,
  'message-middle-filled'
);

/**![MessageMiddleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuMDkzOCAxNy42MjVMMTIuNDIxOSAyMC43ODkxQzEyLjMwNDcgMjAuOTI5NyAxMi4xNjQxIDIxIDEyIDIxQzExLjgxMjUgMjEgMTEuNjcxOSAyMC45Mjk3IDExLjU3ODEgMjAuNzg5MUw4Ljk0MTQxIDE3LjYyNUg1LjI1QzQuNjE3MTkgMTcuNjAxNiA0LjA4OTg0IDE3LjM3ODkgMy42Njc5NyAxNi45NTdDMy4yNDYwOSAxNi41MzUyIDMuMDIzNDQgMTYuMDA3OCAzIDE1LjM3NVY1LjI1QzMuMDIzNDQgNC42MTcxOSAzLjI0NjA5IDQuMDg5ODQgMy42Njc5NyAzLjY2Nzk3QzQuMDg5ODQgMy4yNDYwOSA0LjYxNzE5IDMuMDIzNDQgNS4yNSAzSDE4Ljc1QzE5LjM4MjggMy4wMjM0NCAxOS45MTAyIDMuMjQ2MDkgMjAuMzMyIDMuNjY3OTdDMjAuNzUzOSA0LjA4OTg0IDIwLjk3NjYgNC42MTcxOSAyMSA1LjI1VjE1LjM3NUMyMC45NzY2IDE2LjAwNzggMjAuNzUzOSAxNi41MzUyIDIwLjMzMiAxNi45NTdDMTkuOTEwMiAxNy4zNzg5IDE5LjM4MjggMTcuNjAxNiAxOC43NSAxNy42MjVIMTUuMDkzOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={messageMiddleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageMiddleFilledIcon';
}

export default RefIcon;
