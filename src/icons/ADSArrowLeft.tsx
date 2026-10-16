// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22 7.47L6.22 2.47L7.28 3.53L3.561 7.25L15 7.25V8.75L3.561 8.75L7.28 12.47L6.22 13.53L1.22 8.53C0.927 8.237 0.927 7.763 1.22 7.47Z"/>
  </svg>
);

const aDSArrowLeftIconDefinition = svgToIconDefinition(
  aDSArrowLeftSvg,
  'ads-arrow-left'
);

/**![ADSArrowLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMjIgNy40N0w2LjIyIDIuNDdMNy4yOCAzLjUzTDMuNTYxIDcuMjVMMTUgNy4yNVY4Ljc1TDMuNTYxIDguNzVMNy4yOCAxMi40N0w2LjIyIDEzLjUzTDEuMjIgOC41M0MwLjkyNyA4LjIzNyAwLjkyNyA3Ljc2MyAxLjIyIDcuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowLeft';
}

export default RefIcon;
