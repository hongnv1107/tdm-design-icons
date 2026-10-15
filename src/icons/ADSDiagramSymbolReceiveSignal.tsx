// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolReceiveSignalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4.5C14.5 4.224 14.276 4 14 4H2.426L5.558 7.5C5.813 7.785 5.813 8.215 5.558 8.5L2.426 12H14C14.276 12 14.5 11.776 14.5 11.5V4.5ZM16 11.5C16 12.605 15.104 13.5 14 13.5H0.75C0.454 13.5 0.186 13.326 0.065 13.056C-0.055 12.786 -0.006 12.47 0.191 12.25L3.993 8L0.191 3.75C-0.006 3.53 -0.055 3.214 0.065 2.944C0.186 2.674 0.454 2.5 0.75 2.5H14C15.104 2.5 16 3.395 16 4.5V11.5Z"/>
  </svg>
);

const aDSDiagramSymbolReceiveSignalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolReceiveSignalSvg,
  'ads-diagram-symbol-receive-signal'
);

/**![ADSDiagramSymbolReceiveSignal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA0LjVDMTQuNSA0LjIyNCAxNC4yNzYgNCAxNCA0SDIuNDI2TDUuNTU4IDcuNUM1LjgxMyA3Ljc4NSA1LjgxMyA4LjIxNSA1LjU1OCA4LjVMMi40MjYgMTJIMTRDMTQuMjc2IDEyIDE0LjUgMTEuNzc2IDE0LjUgMTEuNVY0LjVaTTE2IDExLjVDMTYgMTIuNjA1IDE1LjEwNCAxMy41IDE0IDEzLjVIMC43NUMwLjQ1NCAxMy41IDAuMTg2IDEzLjMyNiAwLjA2NSAxMy4wNTZDLTAuMDU1IDEyLjc4NiAtMC4wMDYgMTIuNDcgMC4xOTEgMTIuMjVMMy45OTMgOEwwLjE5MSAzLjc1Qy0wLjAwNiAzLjUzIC0wLjA1NSAzLjIxNCAwLjA2NSAyLjk0NEMwLjE4NiAyLjY3NCAwLjQ1NCAyLjUgMC43NSAyLjVIMTRDMTUuMTA0IDIuNSAxNiAzLjM5NSAxNiA0LjVWMTEuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolReceiveSignalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolReceiveSignal';
}

export default RefIcon;
