// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityLowestSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 9.251L8.413 12.876C8.163 13.041 7.837 13.041 7.587 12.876L2.087 9.251L2.913 7.999L8 11.352L13.087 7.999L13.913 9.251ZM13.913 4.751L8.413 8.376C8.163 8.541 7.837 8.541 7.587 8.376L2.087 4.751L2.913 3.499L8 6.852L13.087 3.499L13.913 4.751Z"/>
  </svg>
);

const aDSPriorityLowestIconDefinition = svgToIconDefinition(
  aDSPriorityLowestSvg,
  'ads-priority-lowest'
);

/**![ADSPriorityLowest](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgOS4yNTFMOC40MTMgMTIuODc2QzguMTYzIDEzLjA0MSA3LjgzNyAxMy4wNDEgNy41ODcgMTIuODc2TDIuMDg3IDkuMjUxTDIuOTEzIDcuOTk5TDggMTEuMzUyTDEzLjA4NyA3Ljk5OUwxMy45MTMgOS4yNTFaTTEzLjkxMyA0Ljc1MUw4LjQxMyA4LjM3NkM4LjE2MyA4LjU0MSA3LjgzNyA4LjU0MSA3LjU4NyA4LjM3NkwyLjA4NyA0Ljc1MUwyLjkxMyAzLjQ5OUw4IDYuODUyTDEzLjA4NyAzLjQ5OUwxMy45MTMgNC43NTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityLowestIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityLowest';
}

export default RefIcon;
