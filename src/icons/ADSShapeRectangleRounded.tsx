// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeRectangleRoundedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.75C1.5 2.955 2.955 1.5 4.75 1.5H11.25C13.045 1.5 14.5 2.955 14.5 4.75V11.25C14.5 13.045 13.045 14.5 11.25 14.5H4.75C2.955 14.5 1.5 13.045 1.5 11.25V4.75ZM4.75 3C3.784 3 3 3.784 3 4.75V11.25C3 12.217 3.784 13 4.75 13H11.25C12.217 13 13 12.217 13 11.25V4.75C13 3.784 12.217 3 11.25 3H4.75Z"/>
  </svg>
);

const aDSShapeRectangleRoundedIconDefinition = svgToIconDefinition(
  aDSShapeRectangleRoundedSvg,
  'ads-shape-rectangle-rounded'
);

/**![ADSShapeRectangleRounded](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSA0Ljc1QzEuNSAyLjk1NSAyLjk1NSAxLjUgNC43NSAxLjVIMTEuMjVDMTMuMDQ1IDEuNSAxNC41IDIuOTU1IDE0LjUgNC43NVYxMS4yNUMxNC41IDEzLjA0NSAxMy4wNDUgMTQuNSAxMS4yNSAxNC41SDQuNzVDMi45NTUgMTQuNSAxLjUgMTMuMDQ1IDEuNSAxMS4yNVY0Ljc1Wk00Ljc1IDNDMy43ODQgMyAzIDMuNzg0IDMgNC43NVYxMS4yNUMzIDEyLjIxNyAzLjc4NCAxMyA0Ljc1IDEzSDExLjI1QzEyLjIxNyAxMyAxMyAxMi4yMTcgMTMgMTEuMjVWNC43NUMxMyAzLjc4NCAxMi4yMTcgMyAxMS4yNSAzSDQuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeRectangleRoundedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeRectangleRounded';
}

export default RefIcon;
