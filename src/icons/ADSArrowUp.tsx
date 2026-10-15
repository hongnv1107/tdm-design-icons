// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15V3.561L12.47 7.28L13.53 6.22L8.53 1.22C8.237 0.927 7.763 0.927 7.47 1.22L2.47 6.22L3.53 7.28L7.25 3.561V15H8.75Z"/>
  </svg>
);

const aDSArrowUpIconDefinition = svgToIconDefinition(
  aDSArrowUpSvg,
  'ads-arrow-up'
);

/**![ADSArrowUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMTVWMy41NjFMMTIuNDcgNy4yOEwxMy41MyA2LjIyTDguNTMgMS4yMkM4LjIzNyAwLjkyNyA3Ljc2MyAwLjkyNyA3LjQ3IDEuMjJMMi40NyA2LjIyTDMuNTMgNy4yOEw3LjI1IDMuNTYxVjE1SDguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUp';
}

export default RefIcon;
