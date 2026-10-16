// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolNodeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 13H11.5V6H1.5V13ZM13 5.561V11.722L14.5 9.972V4.061L13 5.561ZM2.889 4.5H11.94L13.44 3H4.764L2.889 4.5ZM16 10.25C16 10.429 15.936 10.602 15.819 10.738L12.819 14.238C12.677 14.404 12.469 14.5 12.25 14.5H0.75C0.551 14.5 0.36 14.421 0.22 14.28C0.079 14.14 0 13.949 0 13.75V5.25C0 5.022 0.103 4.806 0.281 4.664L4.031 1.664L4.137 1.594C4.247 1.533 4.372 1.5 4.5 1.5H15.25C15.449 1.5 15.64 1.579 15.78 1.72C15.921 1.86 16 2.051 16 2.25V10.25Z"/>
  </svg>
);

const aDSDiagramSymbolNodeIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolNodeSvg,
  'ads-diagram-symbol-node'
);

/**![ADSDiagramSymbolNode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xLjUgMTNIMTEuNVY2SDEuNVYxM1pNMTMgNS41NjFWMTEuNzIyTDE0LjUgOS45NzJWNC4wNjFMMTMgNS41NjFaTTIuODg5IDQuNUgxMS45NEwxMy40NCAzSDQuNzY0TDIuODg5IDQuNVpNMTYgMTAuMjVDMTYgMTAuNDI5IDE1LjkzNiAxMC42MDIgMTUuODE5IDEwLjczOEwxMi44MTkgMTQuMjM4QzEyLjY3NyAxNC40MDQgMTIuNDY5IDE0LjUgMTIuMjUgMTQuNUgwLjc1QzAuNTUxIDE0LjUgMC4zNiAxNC40MjEgMC4yMiAxNC4yOEMwLjA3OSAxNC4xNCAwIDEzLjk0OSAwIDEzLjc1VjUuMjVDMCA1LjAyMiAwLjEwMyA0LjgwNiAwLjI4MSA0LjY2NEw0LjAzMSAxLjY2NEw0LjEzNyAxLjU5NEM0LjI0NyAxLjUzMyA0LjM3MiAxLjUgNC41IDEuNUgxNS4yNUMxNS40NDkgMS41IDE1LjY0IDEuNTc5IDE1Ljc4IDEuNzJDMTUuOTIxIDEuODYgMTYgMi4wNTEgMTYgMi4yNVYxMC4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolNodeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolNode';
}

export default RefIcon;
