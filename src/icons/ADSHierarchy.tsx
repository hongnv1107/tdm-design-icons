// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHierarchySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSHierarchy](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOCAyLjVWNEgwVjIuNUg4WiIvPjxwYXRoIGQ9Ik0xMiA3LjI1VjguNzVINFY3LjI1SDEyWiIvPjxwYXRoIGQ9Ik0xNiAxMlYxMy41SDhWMTJIMTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHierarchyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHierarchy';
}

export default RefIcon;
