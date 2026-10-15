// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTerminalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3C14.5 2.758 14.329 2.556 14.101 2.51L14 2.5H2C1.724 2.5 1.5 2.724 1.5 3V13C1.5 13.276 1.724 13.5 2 13.5H14C14.276 13.5 14.5 13.276 14.5 13V3ZM16 13C16 14.105 15.105 15 14 15H2C0.895 15 0 14.105 0 13V3C0 1.895 0.895 1 2 1H14L14.204 1.011C15.213 1.113 16 1.964 16 3V13Z"/><path d="M4.28 4.721L7.03 7.471C7.323 7.764 7.323 8.238 7.03 8.531L4.28 11.281L3.22 10.221L5.439 8.001L3.22 5.781L4.28 4.721Z"/><path d="M12.5 9.5V11H8V9.5H12.5Z"/>
  </svg>
);

const aDSTerminalIconDefinition = svgToIconDefinition(
  aDSTerminalSvg,
  'ads-terminal'
);

/**![ADSTerminal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzQzE0LjUgMi43NTggMTQuMzI5IDIuNTU2IDE0LjEwMSAyLjUxTDE0IDIuNUgyQzEuNzI0IDIuNSAxLjUgMi43MjQgMS41IDNWMTNDMS41IDEzLjI3NiAxLjcyNCAxMy41IDIgMTMuNUgxNEMxNC4yNzYgMTMuNSAxNC41IDEzLjI3NiAxNC41IDEzVjNaTTE2IDEzQzE2IDE0LjEwNSAxNS4xMDUgMTUgMTQgMTVIMkMwLjg5NSAxNSAwIDE0LjEwNSAwIDEzVjNDMCAxLjg5NSAwLjg5NSAxIDIgMUgxNEwxNC4yMDQgMS4wMTFDMTUuMjEzIDEuMTEzIDE2IDEuOTY0IDE2IDNWMTNaIi8+PHBhdGggZD0iTTQuMjggNC43MjFMNy4wMyA3LjQ3MUM3LjMyMyA3Ljc2NCA3LjMyMyA4LjIzOCA3LjAzIDguNTMxTDQuMjggMTEuMjgxTDMuMjIgMTAuMjIxTDUuNDM5IDguMDAxTDMuMjIgNS43ODFMNC4yOCA0LjcyMVoiLz48cGF0aCBkPSJNMTIuNSA5LjVWMTFIOFY5LjVIMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTerminalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTerminal';
}

export default RefIcon;
