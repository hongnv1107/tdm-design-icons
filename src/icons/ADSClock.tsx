// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSClockSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM8.75 3.25V7.639L10.969 9.414L10.031 10.586L7.531 8.586L7.25 8.36V3.25H8.75ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/>
  </svg>
);

const aDSClockIconDefinition = svgToIconDefinition(
  aDSClockSvg,
  'ads-clock'
);

/**![ADSClock](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOFpNOC43NSAzLjI1VjcuNjM5TDEwLjk2OSA5LjQxNEwxMC4wMzEgMTAuNTg2TDcuNTMxIDguNTg2TDcuMjUgOC4zNlYzLjI1SDguNzVaTTE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSClockIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSClock';
}

export default RefIcon;
