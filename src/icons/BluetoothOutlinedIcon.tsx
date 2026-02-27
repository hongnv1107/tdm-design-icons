// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bluetoothOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.2656 12.3906L16.7109 16.0117L11.5078 21.25L11.4023 14.2891L8.37891 17.3125L7.28906 16.1875L11.0859 12.3906L7.28906 8.59375L8.37891 7.46875L11.4023 10.4922V3.25L16.5352 8.76953L13.2656 12.3906ZM14.707 8.76953L12.9492 7.01172V10.5273L14.707 8.76953ZM12.9492 14.2539V17.7695L14.707 16.0117L12.9492 14.2539Z"/>
  </svg>
);

const bluetoothOutlinedIconDefinition = svgToIconDefinition(
  bluetoothOutlinedSvg,
  'bluetooth-outlined'
);

/**![BluetoothOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMjY1NiAxMi4zOTA2TDE2LjcxMDkgMTYuMDExN0wxMS41MDc4IDIxLjI1TDExLjQwMjMgMTQuMjg5MUw4LjM3ODkxIDE3LjMxMjVMNy4yODkwNiAxNi4xODc1TDExLjA4NTkgMTIuMzkwNkw3LjI4OTA2IDguNTkzNzVMOC4zNzg5MSA3LjQ2ODc1TDExLjQwMjMgMTAuNDkyMlYzLjI1TDE2LjUzNTIgOC43Njk1M0wxMy4yNjU2IDEyLjM5MDZaTTE0LjcwNyA4Ljc2OTUzTDEyLjk0OTIgNy4wMTE3MlYxMC41MjczTDE0LjcwNyA4Ljc2OTUzWk0xMi45NDkyIDE0LjI1MzlWMTcuNzY5NUwxNC43MDcgMTYuMDExN0wxMi45NDkyIDE0LjI1MzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bluetoothOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BluetoothOutlinedIcon';
}

export default RefIcon;
