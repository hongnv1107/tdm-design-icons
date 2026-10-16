// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolDisplaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 6.694 14.109 5.525 13.568 4.699C13.001 3.834 12.386 3.5 12 3.5H4.69C4.518 3.5 4.358 3.588 4.267 3.733L1.573 8L4.267 12.267C4.358 12.412 4.518 12.5 4.69 12.5H12C12.386 12.5 13.001 12.166 13.568 11.301C14.109 10.475 14.5 9.306 14.5 8ZM16 8C16 9.593 15.526 11.049 14.822 12.123C14.144 13.158 13.133 14 12 14H4.69C4.003 14 3.364 13.648 2.998 13.067L0.264 8.733C-0.019 8.285 -0.019 7.715 0.264 7.267L2.998 2.933C3.364 2.352 4.003 2 4.69 2H12C13.133 2 14.144 2.842 14.822 3.877C15.526 4.951 16 6.407 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolDisplayIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolDisplaySvg,
  'ads-diagram-symbol-display'
);

/**![ADSDiagramSymbolDisplay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA2LjY5NCAxNC4xMDkgNS41MjUgMTMuNTY4IDQuNjk5QzEzLjAwMSAzLjgzNCAxMi4zODYgMy41IDEyIDMuNUg0LjY5QzQuNTE4IDMuNSA0LjM1OCAzLjU4OCA0LjI2NyAzLjczM0wxLjU3MyA4TDQuMjY3IDEyLjI2N0M0LjM1OCAxMi40MTIgNC41MTggMTIuNSA0LjY5IDEyLjVIMTJDMTIuMzg2IDEyLjUgMTMuMDAxIDEyLjE2NiAxMy41NjggMTEuMzAxQzE0LjEwOSAxMC40NzUgMTQuNSA5LjMwNiAxNC41IDhaTTE2IDhDMTYgOS41OTMgMTUuNTI2IDExLjA0OSAxNC44MjIgMTIuMTIzQzE0LjE0NCAxMy4xNTggMTMuMTMzIDE0IDEyIDE0SDQuNjlDNC4wMDMgMTQgMy4zNjQgMTMuNjQ4IDIuOTk4IDEzLjA2N0wwLjI2NCA4LjczM0MtMC4wMTkgOC4yODUgLTAuMDE5IDcuNzE1IDAuMjY0IDcuMjY3TDIuOTk4IDIuOTMzQzMuMzY0IDIuMzUyIDQuMDAzIDIgNC42OSAySDEyQzEzLjEzMyAyIDE0LjE0NCAyLjg0MiAxNC44MjIgMy44NzdDMTUuNTI2IDQuOTUxIDE2IDYuNDA3IDE2IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolDisplayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolDisplay';
}

export default RefIcon;
