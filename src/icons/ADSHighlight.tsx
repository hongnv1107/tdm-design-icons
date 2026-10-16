// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHighlightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.516 0.31C11.063 -0.072 11.804 -0.006 12.276 0.465L13.535 1.724C14.006 2.196 14.072 2.937 13.69 3.484L9.365 9.679C9.276 9.807 9.149 9.904 9.002 9.956L5.502 11.206C5.229 11.304 4.925 11.235 4.72 11.03L4.625 10.936L4.03 11.53C3.737 11.823 3.263 11.823 2.97 11.53L2.47 11.03C2.177 10.738 2.177 10.263 2.47 9.97L3.064 9.375L2.97 9.28C2.765 9.075 2.696 8.771 2.794 8.498L4.044 4.998C4.096 4.851 4.193 4.724 4.321 4.635L10.516 0.31ZM11.289 1.6L5.913 5.353L8.647 8.087L12.4 2.711L11.289 1.6ZM7.382 8.942L5.058 6.618L4.366 8.555L5.445 9.634L7.382 8.942Z"/>
  </svg>
);

const aDSHighlightIconDefinition = svgToIconDefinition(
  aDSHighlightSvg,
  'ads-highlight'
);

/**![ADSHighlight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUxNiAwLjMxQzExLjA2MyAtMC4wNzIgMTEuODA0IC0wLjAwNiAxMi4yNzYgMC40NjVMMTMuNTM1IDEuNzI0QzE0LjAwNiAyLjE5NiAxNC4wNzIgMi45MzcgMTMuNjkgMy40ODRMOS4zNjUgOS42NzlDOS4yNzYgOS44MDcgOS4xNDkgOS45MDQgOS4wMDIgOS45NTZMNS41MDIgMTEuMjA2QzUuMjI5IDExLjMwNCA0LjkyNSAxMS4yMzUgNC43MiAxMS4wM0w0LjYyNSAxMC45MzZMNC4wMyAxMS41M0MzLjczNyAxMS44MjMgMy4yNjMgMTEuODIzIDIuOTcgMTEuNTNMMi40NyAxMS4wM0MyLjE3NyAxMC43MzggMi4xNzcgMTAuMjYzIDIuNDcgOS45N0wzLjA2NCA5LjM3NUwyLjk3IDkuMjhDMi43NjUgOS4wNzUgMi42OTYgOC43NzEgMi43OTQgOC40OThMNC4wNDQgNC45OThDNC4wOTYgNC44NTEgNC4xOTMgNC43MjQgNC4zMjEgNC42MzVMMTAuNTE2IDAuMzFaTTExLjI4OSAxLjZMNS45MTMgNS4zNTNMOC42NDcgOC4wODdMMTIuNCAyLjcxMUwxMS4yODkgMS42Wk03LjM4MiA4Ljk0Mkw1LjA1OCA2LjYxOEw0LjM2NiA4LjU1NUw1LjQ0NSA5LjYzNEw3LjM4MiA4Ljk0MloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHighlightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHighlight';
}

export default RefIcon;
