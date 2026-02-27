// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.7188 12.7173L11.7188 16.7089C11.3854 17 11.0208 17.0728 10.625 16.9272C10.2292 16.7401 10.0208 16.4283 10 15.9917V8.00832C10.0208 7.57173 10.2292 7.25988 10.625 7.07277C11.0208 6.92723 11.3854 7 11.7188 7.29106L15.7188 11.2827C15.9062 11.4906 16 11.7297 16 12C16 12.2703 15.9062 12.5094 15.7188 12.7173Z"/>
  </svg>
);

const caretRightFilledIconDefinition = svgToIconDefinition(
  caretRightFilledSvg,
  'caret-right-filled'
);

/**![CaretRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuNzE4OCAxMi43MTczTDExLjcxODggMTYuNzA4OUMxMS4zODU0IDE3IDExLjAyMDggMTcuMDcyOCAxMC42MjUgMTYuOTI3MkMxMC4yMjkyIDE2Ljc0MDEgMTAuMDIwOCAxNi40MjgzIDEwIDE1Ljk5MTdWOC4wMDgzMkMxMC4wMjA4IDcuNTcxNzMgMTAuMjI5MiA3LjI1OTg4IDEwLjYyNSA3LjA3Mjc3QzExLjAyMDggNi45MjcyMyAxMS4zODU0IDcgMTEuNzE4OCA3LjI5MTA2TDE1LjcxODggMTEuMjgyN0MxNS45MDYyIDExLjQ5MDYgMTYgMTEuNzI5NyAxNiAxMkMxNiAxMi4yNzAzIDE1LjkwNjIgMTIuNTA5NCAxNS43MTg4IDEyLjcxNzNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretRightFilledIcon';
}

export default RefIcon;
