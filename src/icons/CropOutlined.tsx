// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cropOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.75 1.125C3.8125 0.4375 4.1875 0.0625 4.875 0C5.5625 0.0625 5.9375 0.4375 6 1.125V16.4062L16.4062 6H7.5V3.75H18.6562L22.0781 0.328125C22.6094 -0.109375 23.1406 -0.109375 23.6719 0.328125C24.1094 0.859375 24.1094 1.39062 23.6719 1.92188L20.25 5.34375V18H22.875C23.5625 18.0625 23.9375 18.4375 24 19.125C23.9375 19.8125 23.5625 20.1875 22.875 20.25H20.25V22.875C20.1875 23.5625 19.8125 23.9375 19.125 24C18.4375 23.9375 18.0625 23.5625 18 22.875V7.59375L7.59375 18H16.5V20.25H6.375C5.625 20.2188 5 19.9688 4.5 19.5C4.03125 19 3.78125 18.375 3.75 17.625V6H1.125C0.4375 5.9375 0.0625 5.5625 0 4.875C0.0625 4.1875 0.4375 3.8125 1.125 3.75H3.75V1.125Z"/>
  </svg>
);

const cropOutlinedIconDefinition = svgToIconDefinition(
  cropOutlinedSvg,
  'crop-outlined'
);

/**![CropOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy43NSAxLjEyNUMzLjgxMjUgMC40Mzc1IDQuMTg3NSAwLjA2MjUgNC44NzUgMEM1LjU2MjUgMC4wNjI1IDUuOTM3NSAwLjQzNzUgNiAxLjEyNVYxNi40MDYyTDE2LjQwNjIgNkg3LjVWMy43NUgxOC42NTYyTDIyLjA3ODEgMC4zMjgxMjVDMjIuNjA5NCAtMC4xMDkzNzUgMjMuMTQwNiAtMC4xMDkzNzUgMjMuNjcxOSAwLjMyODEyNUMyNC4xMDk0IDAuODU5Mzc1IDI0LjEwOTQgMS4zOTA2MiAyMy42NzE5IDEuOTIxODhMMjAuMjUgNS4zNDM3NVYxOEgyMi44NzVDMjMuNTYyNSAxOC4wNjI1IDIzLjkzNzUgMTguNDM3NSAyNCAxOS4xMjVDMjMuOTM3NSAxOS44MTI1IDIzLjU2MjUgMjAuMTg3NSAyMi44NzUgMjAuMjVIMjAuMjVWMjIuODc1QzIwLjE4NzUgMjMuNTYyNSAxOS44MTI1IDIzLjkzNzUgMTkuMTI1IDI0QzE4LjQzNzUgMjMuOTM3NSAxOC4wNjI1IDIzLjU2MjUgMTggMjIuODc1VjcuNTkzNzVMNy41OTM3NSAxOEgxNi41VjIwLjI1SDYuMzc1QzUuNjI1IDIwLjIxODggNSAxOS45Njg4IDQuNSAxOS41QzQuMDMxMjUgMTkgMy43ODEyNSAxOC4zNzUgMy43NSAxNy42MjVWNkgxLjEyNUMwLjQzNzUgNS45Mzc1IDAuMDYyNSA1LjU2MjUgMCA0Ljg3NUMwLjA2MjUgNC4xODc1IDAuNDM3NSAzLjgxMjUgMS4xMjUgMy43NUgzLjc1VjEuMTI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cropOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CropOutlined';
}

export default RefIcon;
