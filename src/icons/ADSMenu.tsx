// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMenuSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 12.5V14H1V12.5H15Z"/><path d="M15 7.25V8.75H1V7.25H15Z"/><path d="M15 2V3.5H1V2H15Z"/>
  </svg>
);

const aDSMenuIconDefinition = svgToIconDefinition(
  aDSMenuSvg,
  'ads-menu'
);

/**![ADSMenu](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNSAxMi41VjE0SDFWMTIuNUgxNVoiLz48cGF0aCBkPSJNMTUgNy4yNVY4Ljc1SDFWNy4yNUgxNVoiLz48cGF0aCBkPSJNMTUgMlYzLjVIMVYySDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMenuIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMenu';
}

export default RefIcon;
