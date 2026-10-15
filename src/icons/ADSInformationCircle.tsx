// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSInformationCircleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8ZM7.25 8.25H6.5V6.75H8C8.414 6.75 8.75 7.086 8.75 7.5V12.5H7.25V8.25Z"/><path d="M9 4.5C9 5.052 8.552 5.5 8 5.5C7.448 5.5 7 5.052 7 4.5C7 3.948 7.448 3.5 8 3.5C8.552 3.5 9 3.948 9 4.5Z"/>
  </svg>
);

const aDSInformationCircleIconDefinition = svgToIconDefinition(
  aDSInformationCircleSvg,
  'ads-information-circle'
);

/**![ADSInformationCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMS41OSA0LjQxIDE0LjUgOCAxNC41QzExLjU5IDE0LjUgMTQuNSAxMS41OSAxNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNVpNMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4Wk03LjI1IDguMjVINi41VjYuNzVIOEM4LjQxNCA2Ljc1IDguNzUgNy4wODYgOC43NSA3LjVWMTIuNUg3LjI1VjguMjVaIi8+PHBhdGggZD0iTTkgNC41QzkgNS4wNTIgOC41NTIgNS41IDggNS41QzcuNDQ4IDUuNSA3IDUuMDUyIDcgNC41QzcgMy45NDggNy40NDggMy41IDggMy41QzguNTUyIDMuNSA5IDMuOTQ4IDkgNC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSInformationCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSInformationCircle';
}

export default RefIcon;
