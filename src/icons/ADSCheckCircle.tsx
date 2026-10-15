// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckCircleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM12.326 5.48L7.326 11.481C7.184 11.651 6.973 11.75 6.75 11.75C6.528 11.75 6.316 11.651 6.174 11.481L3.674 8.48L4.826 7.52L6.75 9.828L11.174 4.52L12.326 5.48ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/>
  </svg>
);

const aDSCheckCircleIconDefinition = svgToIconDefinition(
  aDSCheckCircleSvg,
  'ads-check-circle'
);

/**![ADSCheckCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOFpNMTIuMzI2IDUuNDhMNy4zMjYgMTEuNDgxQzcuMTg0IDExLjY1MSA2Ljk3MyAxMS43NSA2Ljc1IDExLjc1QzYuNTI4IDExLjc1IDYuMzE2IDExLjY1MSA2LjE3NCAxMS40ODFMMy42NzQgOC40OEw0LjgyNiA3LjUyTDYuNzUgOS44MjhMMTEuMTc0IDQuNTJMMTIuMzI2IDUuNDhaTTE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckCircle';
}

export default RefIcon;
