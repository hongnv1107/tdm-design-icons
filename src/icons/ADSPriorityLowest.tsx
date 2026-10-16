// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityLowestSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSPriorityLowest](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDkuMjUxTDguNDEzIDEyLjg3NkM4LjE2MyAxMy4wNDEgNy44MzcgMTMuMDQxIDcuNTg3IDEyLjg3NkwyLjA4NyA5LjI1MUwyLjkxMyA3Ljk5OUw4IDExLjM1MkwxMy4wODcgNy45OTlMMTMuOTEzIDkuMjUxWk0xMy45MTMgNC43NTFMOC40MTMgOC4zNzZDOC4xNjMgOC41NDEgNy44MzcgOC41NDEgNy41ODcgOC4zNzZMMi4wODcgNC43NTFMMi45MTMgMy40OTlMOCA2Ljg1MkwxMy4wODcgMy40OTlMMTMuOTEzIDQuNzUxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityLowestIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityLowest';
}

export default RefIcon;
