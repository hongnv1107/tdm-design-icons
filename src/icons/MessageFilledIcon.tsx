// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const messageFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.25 3.00391H18.75C19.3828 3.02734 19.9102 3.25 20.332 3.67188C20.7539 4.09375 20.9766 4.62109 21 5.25391V15.3789C20.9766 16.0117 20.7539 16.5391 20.332 16.9609C19.9102 17.3828 19.3828 17.6055 18.75 17.6289H13.8633L9.53906 20.8984C9.35156 21.0156 9.15234 21.0273 8.94141 20.9336C8.73047 20.8398 8.625 20.6758 8.625 20.4414V17.6289H5.25C4.61719 17.6055 4.08984 17.3828 3.66797 16.9609C3.24609 16.5391 3.02344 16.0117 3 15.3789V5.25391C3.02344 4.62109 3.24609 4.09375 3.66797 3.67188C4.08984 3.25 4.61719 3.02734 5.25 3.00391Z"/>
  </svg>
);

const messageFilledIconDefinition = svgToIconDefinition(
  messageFilledSvg,
  'message-filled'
);

/**![MessageFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4yNSAzLjAwMzkxSDE4Ljc1QzE5LjM4MjggMy4wMjczNCAxOS45MTAyIDMuMjUgMjAuMzMyIDMuNjcxODhDMjAuNzUzOSA0LjA5Mzc1IDIwLjk3NjYgNC42MjEwOSAyMSA1LjI1MzkxVjE1LjM3ODlDMjAuOTc2NiAxNi4wMTE3IDIwLjc1MzkgMTYuNTM5MSAyMC4zMzIgMTYuOTYwOUMxOS45MTAyIDE3LjM4MjggMTkuMzgyOCAxNy42MDU1IDE4Ljc1IDE3LjYyODlIMTMuODYzM0w5LjUzOTA2IDIwLjg5ODRDOS4zNTE1NiAyMS4wMTU2IDkuMTUyMzQgMjEuMDI3MyA4Ljk0MTQxIDIwLjkzMzZDOC43MzA0NyAyMC44Mzk4IDguNjI1IDIwLjY3NTggOC42MjUgMjAuNDQxNFYxNy42Mjg5SDUuMjVDNC42MTcxOSAxNy42MDU1IDQuMDg5ODQgMTcuMzgyOCAzLjY2Nzk3IDE2Ljk2MDlDMy4yNDYwOSAxNi41MzkxIDMuMDIzNDQgMTYuMDExNyAzIDE1LjM3ODlWNS4yNTM5MUMzLjAyMzQ0IDQuNjIxMDkgMy4yNDYwOSA0LjA5Mzc1IDMuNjY3OTcgMy42NzE4OEM0LjA4OTg0IDMuMjUgNC42MTcxOSAzLjAyNzM0IDUuMjUgMy4wMDM5MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={messageFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageFilledIcon';
}

export default RefIcon;
