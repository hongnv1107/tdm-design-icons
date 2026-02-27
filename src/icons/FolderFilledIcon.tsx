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
    <path d="M5.25 19.875C4.61719 19.8516 4.08984 19.6289 3.66797 19.207C3.24609 18.7852 3.02344 18.2578 3 17.625V6.375C3.02344 5.74219 3.24609 5.21484 3.66797 4.79297C4.08984 4.37109 4.61719 4.14844 5.25 4.125H9.75C10.5 4.14844 11.0977 4.45313 11.543 5.03906L12.2109 5.91797C12.4453 6.22266 12.75 6.375 13.125 6.375H18.75C19.3828 6.39844 19.9102 6.62109 20.332 7.04297C20.7539 7.46484 20.9766 7.99219 21 8.625V17.625C20.9766 18.2578 20.7539 18.7852 20.332 19.207C19.9102 19.6289 19.3828 19.8516 18.75 19.875H5.25Z"/>
  </svg>
);

const folderFilledIconDefinition = svgToIconDefinition(
  folderFilledSvg,
  'folder-filled'
);

/**![FolderFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4yNSAxOS44NzVDNC42MTcxOSAxOS44NTE2IDQuMDg5ODQgMTkuNjI4OSAzLjY2Nzk3IDE5LjIwN0MzLjI0NjA5IDE4Ljc4NTIgMy4wMjM0NCAxOC4yNTc4IDMgMTcuNjI1VjYuMzc1QzMuMDIzNDQgNS43NDIxOSAzLjI0NjA5IDUuMjE0ODQgMy42Njc5NyA0Ljc5Mjk3QzQuMDg5ODQgNC4zNzEwOSA0LjYxNzE5IDQuMTQ4NDQgNS4yNSA0LjEyNUg5Ljc1QzEwLjUgNC4xNDg0NCAxMS4wOTc3IDQuNDUzMTMgMTEuNTQzIDUuMDM5MDZMMTIuMjEwOSA1LjkxNzk3QzEyLjQ0NTMgNi4yMjI2NiAxMi43NSA2LjM3NSAxMy4xMjUgNi4zNzVIMTguNzVDMTkuMzgyOCA2LjM5ODQ0IDE5LjkxMDIgNi42MjEwOSAyMC4zMzIgNy4wNDI5N0MyMC43NTM5IDcuNDY0ODQgMjAuOTc2NiA3Ljk5MjE5IDIxIDguNjI1VjE3LjYyNUMyMC45NzY2IDE4LjI1NzggMjAuNzUzOSAxOC43ODUyIDIwLjMzMiAxOS4yMDdDMTkuOTEwMiAxOS42Mjg5IDE5LjM4MjggMTkuODUxNiAxOC43NSAxOS44NzVINS4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={folderFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderFilledIcon';
}

export default RefIcon;
