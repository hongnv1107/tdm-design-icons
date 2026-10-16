// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHierarchySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 2.5V4H0V2.5H8Z"/><path d="M12 7.25V8.75H4V7.25H12Z"/><path d="M16 12V13.5H8V12H16Z"/>
  </svg>
);

const aDSHierarchyIconDefinition = svgToIconDefinition(
  aDSHierarchySvg,
  'ads-hierarchy'
);

/**![ADSHierarchy](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04IDIuNVY0SDBWMi41SDhaIi8+PHBhdGggZD0iTTEyIDcuMjVWOC43NUg0VjcuMjVIMTJaIi8+PHBhdGggZD0iTTE2IDEyVjEzLjVIOFYxMkgxNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHierarchyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHierarchy';
}

export default RefIcon;
