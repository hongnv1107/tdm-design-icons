// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeStyleDashedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStrokeStyleDashed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMzMzIDguNzVIMVY3LjI1SDQuMzMzVjguNzVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjY2NyA4Ljc1SDYuMzMzVjcuMjVIOS42NjdWOC43NVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDguNzVIMTEuNjY3VjcuMjVIMTVWOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeStyleDashedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeStyleDashed';
}

export default RefIcon;
