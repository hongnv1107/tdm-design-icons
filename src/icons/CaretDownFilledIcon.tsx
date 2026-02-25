// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.2827 15.7188L7.29106 11.7188C7 11.3854 6.92723 11.0208 7.07277 10.625C7.25988 10.2292 7.57173 10.0208 8.00832 10H15.9917C16.4283 10.0208 16.7401 10.2292 16.9272 10.625C17.0728 11.0208 17 11.3854 16.7089 11.7188L12.7173 15.7188C12.5094 15.9062 12.2703 16 12 16C11.7297 16 11.4906 15.9062 11.2827 15.7188Z" />
  </svg>
);

const caretDownFilledIconDefinition = svgToIconDefinition(
  caretDownFilledSvg,
  'caret-down-filled'
);

/**![CaretDownFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMjgyNyAxNS43MTg4TDcuMjkxMDYgMTEuNzE4OEM3IDExLjM4NTQgNi45MjcyMyAxMS4wMjA4IDcuMDcyNzcgMTAuNjI1QzcuMjU5ODggMTAuMjI5MiA3LjU3MTczIDEwLjAyMDggOC4wMDgzMiAxMEgxNS45OTE3QzE2LjQyODMgMTAuMDIwOCAxNi43NDAxIDEwLjIyOTIgMTYuOTI3MiAxMC42MjVDMTcuMDcyOCAxMS4wMjA4IDE3IDExLjM4NTQgMTYuNzA4OSAxMS43MTg4TDEyLjcxNzMgMTUuNzE4OEMxMi41MDk0IDE1LjkwNjIgMTIuMjcwMyAxNiAxMiAxNkMxMS43Mjk3IDE2IDExLjQ5MDYgMTUuOTA2MiAxMS4yODI3IDE1LjcxODhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretDownFilledIcon';
}

export default RefIcon;
