// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityHighSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 9.25L8.413 5.625C8.163 5.459 7.837 5.459 7.587 5.625L2.087 9.25L2.913 10.502L8 7.149L13.087 10.502L13.913 9.25Z"/>
  </svg>
);

const aDSPriorityHighIconDefinition = svgToIconDefinition(
  aDSPriorityHighSvg,
  'ads-priority-high'
);

/**![ADSPriorityHigh](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgOS4yNUw4LjQxMyA1LjYyNUM4LjE2MyA1LjQ1OSA3LjgzNyA1LjQ1OSA3LjU4NyA1LjYyNUwyLjA4NyA5LjI1TDIuOTEzIDEwLjUwMkw4IDcuMTQ5TDEzLjA4NyAxMC41MDJMMTMuOTEzIDkuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityHighIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityHigh';
}

export default RefIcon;
