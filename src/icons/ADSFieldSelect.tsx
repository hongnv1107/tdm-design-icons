// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldSelectSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/><path d="M12.031 7.279L8.531 10.779C8.238 11.072 7.763 11.072 7.47 10.779L3.97 7.279L5.031 6.219L8 9.188L10.97 6.219L12.031 7.279Z"/>
  </svg>
);

const aDSFieldSelectIconDefinition = svgToIconDefinition(
  aDSFieldSelectSvg,
  'ads-field-select'
);

/**![ADSFieldSelect](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOFpNMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOFoiLz48cGF0aCBkPSJNMTIuMDMxIDcuMjc5TDguNTMxIDEwLjc3OUM4LjIzOCAxMS4wNzIgNy43NjMgMTEuMDcyIDcuNDcgMTAuNzc5TDMuOTcgNy4yNzlMNS4wMzEgNi4yMTlMOCA5LjE4OEwxMC45NyA2LjIxOUwxMi4wMzEgNy4yNzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldSelectIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldSelect';
}

export default RefIcon;
