// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityMinorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 11.251L8.413 14.876C8.163 15.041 7.837 15.041 7.587 14.876L2.087 11.251L2.913 9.999L8 13.352L13.087 9.999L13.913 11.251ZM13.913 6.751L8.413 10.376C8.163 10.541 7.837 10.541 7.587 10.376L2.087 6.751L2.913 5.499L8 8.852L13.087 5.499L13.913 6.751ZM13.913 2.251L8.413 5.876C8.163 6.041 7.837 6.041 7.587 5.876L2.087 2.251L2.913 0.999L8 4.352L13.087 0.999L13.913 2.251Z"/>
  </svg>
);

const aDSPriorityMinorIconDefinition = svgToIconDefinition(
  aDSPriorityMinorSvg,
  'ads-priority-minor'
);

/**![ADSPriorityMinor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgMTEuMjUxTDguNDEzIDE0Ljg3NkM4LjE2MyAxNS4wNDEgNy44MzcgMTUuMDQxIDcuNTg3IDE0Ljg3NkwyLjA4NyAxMS4yNTFMMi45MTMgOS45OTlMOCAxMy4zNTJMMTMuMDg3IDkuOTk5TDEzLjkxMyAxMS4yNTFaTTEzLjkxMyA2Ljc1MUw4LjQxMyAxMC4zNzZDOC4xNjMgMTAuNTQxIDcuODM3IDEwLjU0MSA3LjU4NyAxMC4zNzZMMi4wODcgNi43NTFMMi45MTMgNS40OTlMOCA4Ljg1MkwxMy4wODcgNS40OTlMMTMuOTEzIDYuNzUxWk0xMy45MTMgMi4yNTFMOC40MTMgNS44NzZDOC4xNjMgNi4wNDEgNy44MzcgNi4wNDEgNy41ODcgNS44NzZMMi4wODcgMi4yNTFMMi45MTMgMC45OTlMOCA0LjM1MkwxMy4wODcgMC45OTlMMTMuOTEzIDIuMjUxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityMinorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityMinor';
}

export default RefIcon;
