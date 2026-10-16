// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeStyleDashedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.333 8.75H1V7.25H4.333V8.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.667 8.75H6.333V7.25H9.667V8.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.75H11.667V7.25H15V8.75Z"/>
  </svg>
);

const aDSStrokeStyleDashedIconDefinition = svgToIconDefinition(
  aDSStrokeStyleDashedSvg,
  'ads-stroke-style-dashed'
);

/**![ADSStrokeStyleDashed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4zMzMgOC43NUgxVjcuMjVINC4zMzNWOC43NVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNjY3IDguNzVINi4zMzNWNy4yNUg5LjY2N1Y4Ljc1WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgOC43NUgxMS42NjdWNy4yNUgxNVY4Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeStyleDashedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeStyleDashed';
}

export default RefIcon;
