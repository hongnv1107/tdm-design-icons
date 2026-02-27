// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.28125 12.7173C8.09375 12.5094 8 12.2703 8 12C8 11.7297 8.09375 11.4906 8.28125 11.2827L12.2812 7.29106C12.6146 7 12.9792 6.92723 13.375 7.07277C13.7708 7.25988 13.9792 7.57173 14 8.00832V15.9917C13.9792 16.4283 13.7708 16.7401 13.375 16.9272C12.9792 17.0728 12.6146 17 12.2812 16.7089L8.28125 12.7173Z"/>
  </svg>
);

const caretLeftFilledIconDefinition = svgToIconDefinition(
  caretLeftFilledSvg,
  'caret-left-filled'
);

/**![CaretLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4yODEyNSAxMi43MTczQzguMDkzNzUgMTIuNTA5NCA4IDEyLjI3MDMgOCAxMkM4IDExLjcyOTcgOC4wOTM3NSAxMS40OTA2IDguMjgxMjUgMTEuMjgyN0wxMi4yODEyIDcuMjkxMDZDMTIuNjE0NiA3IDEyLjk3OTIgNi45MjcyMyAxMy4zNzUgNy4wNzI3N0MxMy43NzA4IDcuMjU5ODggMTMuOTc5MiA3LjU3MTczIDE0IDguMDA4MzJWMTUuOTkxN0MxMy45NzkyIDE2LjQyODMgMTMuNzcwOCAxNi43NDAxIDEzLjM3NSAxNi45MjcyQzEyLjk3OTIgMTcuMDcyOCAxMi42MTQ2IDE3IDEyLjI4MTIgMTYuNzA4OUw4LjI4MTI1IDEyLjcxNzNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretLeftFilledIcon';
}

export default RefIcon;
