// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLinkSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22 2.22C9.756 0.684 12.245 0.684 13.781 2.22C15.316 3.755 15.316 6.245 13.781 7.78L11.531 10.03L10.47 8.97L12.72 6.72C13.67 5.77 13.67 4.23 12.72 3.28C11.77 2.331 10.23 2.331 9.281 3.28L7.031 5.53L5.97 4.47L8.22 2.22ZM11.281 5.78L5.781 11.28L4.72 10.22L10.22 4.72L11.281 5.78ZM2.22 8.22L4.47 5.97L5.531 7.03L3.281 9.28C2.331 10.23 2.331 11.77 3.281 12.72C4.23 13.67 5.77 13.67 6.72 12.72L8.97 10.47L10.031 11.53L7.781 13.78C6.245 15.316 3.756 15.316 2.22 13.78C0.684 12.245 0.684 9.755 2.22 8.22Z"/>
  </svg>
);

const aDSLinkIconDefinition = svgToIconDefinition(
  aDSLinkSvg,
  'ads-link'
);

/**![ADSLink](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguMjIgMi4yMkM5Ljc1NiAwLjY4NCAxMi4yNDUgMC42ODQgMTMuNzgxIDIuMjJDMTUuMzE2IDMuNzU1IDE1LjMxNiA2LjI0NSAxMy43ODEgNy43OEwxMS41MzEgMTAuMDNMMTAuNDcgOC45N0wxMi43MiA2LjcyQzEzLjY3IDUuNzcgMTMuNjcgNC4yMyAxMi43MiAzLjI4QzExLjc3IDIuMzMxIDEwLjIzIDIuMzMxIDkuMjgxIDMuMjhMNy4wMzEgNS41M0w1Ljk3IDQuNDdMOC4yMiAyLjIyWk0xMS4yODEgNS43OEw1Ljc4MSAxMS4yOEw0LjcyIDEwLjIyTDEwLjIyIDQuNzJMMTEuMjgxIDUuNzhaTTIuMjIgOC4yMkw0LjQ3IDUuOTdMNS41MzEgNy4wM0wzLjI4MSA5LjI4QzIuMzMxIDEwLjIzIDIuMzMxIDExLjc3IDMuMjgxIDEyLjcyQzQuMjMgMTMuNjcgNS43NyAxMy42NyA2LjcyIDEyLjcyTDguOTcgMTAuNDdMMTAuMDMxIDExLjUzTDcuNzgxIDEzLjc4QzYuMjQ1IDE1LjMxNiAzLjc1NiAxNS4zMTYgMi4yMiAxMy43OEMwLjY4NCAxMi4yNDUgMC42ODQgOS43NTUgMi4yMiA4LjIyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLinkIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLink';
}

export default RefIcon;
