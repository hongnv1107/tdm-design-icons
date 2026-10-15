// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSurveySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 3.5C13 3.224 12.776 3 12.5 3H11.5V4.25C11.5 4.664 11.164 5 10.75 5H5.25C4.836 5 4.5 4.664 4.5 4.25V3H3.5C3.224 3 3 3.224 3 3.5V14C3 14.276 3.224 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V3.5ZM6 10.5V12H4.5V10.5H6ZM11.5 10.5V12H7.5V10.5H11.5ZM6 7.5V9H4.5V7.5H6ZM11.5 7.5V9H7.5V7.5H11.5ZM6.5 1.5C6.224 1.5 6 1.724 6 2V3.5H10V2C10 1.724 9.776 1.5 9.5 1.5H6.5ZM14.5 14C14.5 15.105 13.605 16 12.5 16H3.5C2.395 16 1.5 15.105 1.5 14V3.5C1.5 2.395 2.395 1.5 3.5 1.5H4.565C4.788 0.638 5.568 0 6.5 0H9.5C10.432 0 11.212 0.638 11.435 1.5H12.5C13.605 1.5 14.5 2.395 14.5 3.5V14Z"/>
  </svg>
);

const aDSSurveyIconDefinition = svgToIconDefinition(
  aDSSurveySvg,
  'ads-survey'
);

/**![ADSSurvey](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgMy41QzEzIDMuMjI0IDEyLjc3NiAzIDEyLjUgM0gxMS41VjQuMjVDMTEuNSA0LjY2NCAxMS4xNjQgNSAxMC43NSA1SDUuMjVDNC44MzYgNSA0LjUgNC42NjQgNC41IDQuMjVWM0gzLjVDMy4yMjQgMyAzIDMuMjI0IDMgMy41VjE0QzMgMTQuMjc2IDMuMjI0IDE0LjUgMy41IDE0LjVIMTIuNUMxMi43NzYgMTQuNSAxMyAxNC4yNzYgMTMgMTRWMy41Wk02IDEwLjVWMTJINC41VjEwLjVINlpNMTEuNSAxMC41VjEySDcuNVYxMC41SDExLjVaTTYgNy41VjlINC41VjcuNUg2Wk0xMS41IDcuNVY5SDcuNVY3LjVIMTEuNVpNNi41IDEuNUM2LjIyNCAxLjUgNiAxLjcyNCA2IDJWMy41SDEwVjJDMTAgMS43MjQgOS43NzYgMS41IDkuNSAxLjVINi41Wk0xNC41IDE0QzE0LjUgMTUuMTA1IDEzLjYwNSAxNiAxMi41IDE2SDMuNUMyLjM5NSAxNiAxLjUgMTUuMTA1IDEuNSAxNFYzLjVDMS41IDIuMzk1IDIuMzk1IDEuNSAzLjUgMS41SDQuNTY1QzQuNzg4IDAuNjM4IDUuNTY4IDAgNi41IDBIOS41QzEwLjQzMiAwIDExLjIxMiAwLjYzOCAxMS40MzUgMS41SDEyLjVDMTMuNjA1IDEuNSAxNC41IDIuMzk1IDE0LjUgMy41VjE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSurveyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSurvey';
}

export default RefIcon;
