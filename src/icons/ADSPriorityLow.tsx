// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityLowSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 7.251L8.413 10.876C8.163 11.041 7.837 11.041 7.587 10.876L2.087 7.251L2.913 5.999L8 9.352L13.087 5.999L13.913 7.251Z"/>
  </svg>
);

const aDSPriorityLowIconDefinition = svgToIconDefinition(
  aDSPriorityLowSvg,
  'ads-priority-low'
);

/**![ADSPriorityLow](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDcuMjUxTDguNDEzIDEwLjg3NkM4LjE2MyAxMS4wNDEgNy44MzcgMTEuMDQxIDcuNTg3IDEwLjg3NkwyLjA4NyA3LjI1MUwyLjkxMyA1Ljk5OUw4IDkuMzUyTDEzLjA4NyA1Ljk5OUwxMy45MTMgNy4yNTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityLowIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityLow';
}

export default RefIcon;
