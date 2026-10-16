// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.75 4C6.717 4 7.5 4.784 7.5 5.75C7.5 6.717 6.717 7.5 5.75 7.5C4.784 7.5 4 6.717 4 5.75C4 4.784 4.784 4 5.75 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H3.644L9.918 5.777L9.971 5.719C10.101 5.589 10.275 5.511 10.461 5.501C10.673 5.49 10.88 5.57 11.03 5.72L13.5 8.189V3C13.5 2.724 13.276 2.5 13 2.5H3ZM5.575 13.5H13C13.276 13.5 13.5 13.276 13.5 13V10.311L10.557 7.367L5.575 13.5Z"/>
  </svg>
);

const aDSImageIconDefinition = svgToIconDefinition(
  aDSImageSvg,
  'ads-image'
);

/**![ADSImage](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS43NSA0QzYuNzE3IDQgNy41IDQuNzg0IDcuNSA1Ljc1QzcuNSA2LjcxNyA2LjcxNyA3LjUgNS43NSA3LjVDNC43ODQgNy41IDQgNi43MTcgNCA1Ljc1QzQgNC43ODQgNC43ODQgNCA1Ljc1IDRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMy42NDRMOS45MTggNS43NzdMOS45NzEgNS43MTlDMTAuMTAxIDUuNTg5IDEwLjI3NSA1LjUxMSAxMC40NjEgNS41MDFDMTAuNjczIDUuNDkgMTAuODggNS41NyAxMS4wMyA1LjcyTDEzLjUgOC4xODlWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDNaTTUuNTc1IDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YxMC4zMTFMMTAuNTU3IDcuMzY3TDUuNTc1IDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImage';
}

export default RefIcon;
