// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFlaskSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.25 1V2.5H10.5V3.859L13.783 12.273C14.295 13.584 13.328 15 11.92 15H4.08C2.672 15 1.705 13.584 2.217 12.273L5.5 3.859V2.5H4.75V1H11.25ZM3.614 12.818C3.486 13.146 3.728 13.5 4.08 13.5H11.92C12.272 13.5 12.514 13.146 12.386 12.818L10.897 9H5.104L3.614 12.818ZM7 4C7 4.093 6.982 4.186 6.948 4.272L5.69 7.5H10.311L9.052 4.272C9.018 4.186 9 4.093 9 4V2.5H7V4Z"/>
  </svg>
);

const aDSFlaskIconDefinition = svgToIconDefinition(
  aDSFlaskSvg,
  'ads-flask'
);

/**![ADSFlask](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuMjUgMVYyLjVIMTAuNVYzLjg1OUwxMy43ODMgMTIuMjczQzE0LjI5NSAxMy41ODQgMTMuMzI4IDE1IDExLjkyIDE1SDQuMDhDMi42NzIgMTUgMS43MDUgMTMuNTg0IDIuMjE3IDEyLjI3M0w1LjUgMy44NTlWMi41SDQuNzVWMUgxMS4yNVpNMy42MTQgMTIuODE4QzMuNDg2IDEzLjE0NiAzLjcyOCAxMy41IDQuMDggMTMuNUgxMS45MkMxMi4yNzIgMTMuNSAxMi41MTQgMTMuMTQ2IDEyLjM4NiAxMi44MThMMTAuODk3IDlINS4xMDRMMy42MTQgMTIuODE4Wk03IDRDNyA0LjA5MyA2Ljk4MiA0LjE4NiA2Ljk0OCA0LjI3Mkw1LjY5IDcuNUgxMC4zMTFMOS4wNTIgNC4yNzJDOS4wMTggNC4xODYgOSA0LjA5MyA5IDRWMi41SDdWNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFlaskIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFlask';
}

export default RefIcon;
