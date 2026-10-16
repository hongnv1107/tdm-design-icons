// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityMinorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSPriorityMinor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDExLjI1MUw4LjQxMyAxNC44NzZDOC4xNjMgMTUuMDQxIDcuODM3IDE1LjA0MSA3LjU4NyAxNC44NzZMMi4wODcgMTEuMjUxTDIuOTEzIDkuOTk5TDggMTMuMzUyTDEzLjA4NyA5Ljk5OUwxMy45MTMgMTEuMjUxWk0xMy45MTMgNi43NTFMOC40MTMgMTAuMzc2QzguMTYzIDEwLjU0MSA3LjgzNyAxMC41NDEgNy41ODcgMTAuMzc2TDIuMDg3IDYuNzUxTDIuOTEzIDUuNDk5TDggOC44NTJMMTMuMDg3IDUuNDk5TDEzLjkxMyA2Ljc1MVpNMTMuOTEzIDIuMjUxTDguNDEzIDUuODc2QzguMTYzIDYuMDQxIDcuODM3IDYuMDQxIDcuNTg3IDUuODc2TDIuMDg3IDIuMjUxTDIuOTEzIDAuOTk5TDggNC4zNTJMMTMuMDg3IDAuOTk5TDEzLjkxMyAyLjI1MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityMinorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityMinor';
}

export default RefIcon;
