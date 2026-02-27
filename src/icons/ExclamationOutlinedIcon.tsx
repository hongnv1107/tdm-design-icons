// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const exclamationOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.75 5.75V14.75C12.7083 15.2083 12.4583 15.4583 12 15.5C11.5417 15.4583 11.2917 15.2083 11.25 14.75V5.75C11.2917 5.29167 11.5417 5.04167 12 5C12.4583 5.04167 12.7083 5.29167 12.75 5.75ZM12 19C11.7083 19 11.4688 18.9062 11.2812 18.7188C11.0938 18.5312 11 18.2917 11 18C11 17.7083 11.0938 17.4688 11.2812 17.2812C11.4688 17.0938 11.7083 17 12 17C12.2917 17 12.5312 17.0938 12.7188 17.2812C12.9062 17.4688 13 17.7083 13 18C13 18.2917 12.9062 18.5312 12.7188 18.7188C12.5312 18.9062 12.2917 19 12 19Z"/>
  </svg>
);

const exclamationOutlinedIconDefinition = svgToIconDefinition(
  exclamationOutlinedSvg,
  'exclamation-outlined'
);

/**![ExclamationOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNzUgNS43NVYxNC43NUMxMi43MDgzIDE1LjIwODMgMTIuNDU4MyAxNS40NTgzIDEyIDE1LjVDMTEuNTQxNyAxNS40NTgzIDExLjI5MTcgMTUuMjA4MyAxMS4yNSAxNC43NVY1Ljc1QzExLjI5MTcgNS4yOTE2NyAxMS41NDE3IDUuMDQxNjcgMTIgNUMxMi40NTgzIDUuMDQxNjcgMTIuNzA4MyA1LjI5MTY3IDEyLjc1IDUuNzVaTTEyIDE5QzExLjcwODMgMTkgMTEuNDY4OCAxOC45MDYyIDExLjI4MTIgMTguNzE4OEMxMS4wOTM4IDE4LjUzMTIgMTEgMTguMjkxNyAxMSAxOEMxMSAxNy43MDgzIDExLjA5MzggMTcuNDY4OCAxMS4yODEyIDE3LjI4MTJDMTEuNDY4OCAxNy4wOTM4IDExLjcwODMgMTcgMTIgMTdDMTIuMjkxNyAxNyAxMi41MzEyIDE3LjA5MzggMTIuNzE4OCAxNy4yODEyQzEyLjkwNjIgMTcuNDY4OCAxMyAxNy43MDgzIDEzIDE4QzEzIDE4LjI5MTcgMTIuOTA2MiAxOC41MzEyIDEyLjcxODggMTguNzE4OEMxMi41MzEyIDE4LjkwNjIgMTIuMjkxNyAxOSAxMiAxOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={exclamationOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationOutlinedIcon';
}

export default RefIcon;
