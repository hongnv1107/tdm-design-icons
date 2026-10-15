// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSEditionsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.75 1L12.845 1.006C13.067 1.034 13.266 1.161 13.385 1.353L15.885 5.353C16.059 5.63 16.032 5.987 15.82 6.236L8.57 14.736C8.428 14.903 8.219 15 8 15C7.78 15 7.572 14.903 7.429 14.736L0.179 6.236C-0.033 5.987 -0.059 5.63 0.114 5.353L2.614 1.353L2.67 1.274C2.811 1.102 3.023 1 3.25 1H12.75ZM8 11.813L9.718 6.5H6.281L8 11.813ZM6.127 10.899L4.704 6.5H2.375L6.127 10.899ZM9.872 10.899L13.625 6.5H11.296L9.872 10.899ZM11.302 5H13.897L12.335 2.5H10.52L11.302 5ZM6.27 5H9.729L8.948 2.5H7.051L6.27 5ZM2.102 5H4.698L5.479 2.5H3.665L2.102 5Z"/>
  </svg>
);

const aDSEditionsIconDefinition = svgToIconDefinition(
  aDSEditionsSvg,
  'ads-editions'
);

/**![ADSEditions](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNzUgMUwxMi44NDUgMS4wMDZDMTMuMDY3IDEuMDM0IDEzLjI2NiAxLjE2MSAxMy4zODUgMS4zNTNMMTUuODg1IDUuMzUzQzE2LjA1OSA1LjYzIDE2LjAzMiA1Ljk4NyAxNS44MiA2LjIzNkw4LjU3IDE0LjczNkM4LjQyOCAxNC45MDMgOC4yMTkgMTUgOCAxNUM3Ljc4IDE1IDcuNTcyIDE0LjkwMyA3LjQyOSAxNC43MzZMMC4xNzkgNi4yMzZDLTAuMDMzIDUuOTg3IC0wLjA1OSA1LjYzIDAuMTE0IDUuMzUzTDIuNjE0IDEuMzUzTDIuNjcgMS4yNzRDMi44MTEgMS4xMDIgMy4wMjMgMSAzLjI1IDFIMTIuNzVaTTggMTEuODEzTDkuNzE4IDYuNUg2LjI4MUw4IDExLjgxM1pNNi4xMjcgMTAuODk5TDQuNzA0IDYuNUgyLjM3NUw2LjEyNyAxMC44OTlaTTkuODcyIDEwLjg5OUwxMy42MjUgNi41SDExLjI5Nkw5Ljg3MiAxMC44OTlaTTExLjMwMiA1SDEzLjg5N0wxMi4zMzUgMi41SDEwLjUyTDExLjMwMiA1Wk02LjI3IDVIOS43MjlMOC45NDggMi41SDcuMDUxTDYuMjcgNVpNMi4xMDIgNUg0LjY5OEw1LjQ3OSAyLjVIMy42NjVMMi4xMDIgNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSEditionsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSEditions';
}

export default RefIcon;
