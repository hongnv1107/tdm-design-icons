// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const boltLightningFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.26318 11.9825L6.24564 3.98246C6.31582 3.42105 6.80704 3 7.36845 3H13.2632C13.7895 3 14.2456 3.45614 14.2456 3.98246C14.2456 4.08772 14.2106 4.19298 14.1755 4.29825L12.5614 8.61404H17.4386C18.1404 8.61404 18.7369 9.21053 18.7369 9.91228C18.7369 10.193 18.6316 10.4386 18.4913 10.6491L11.7544 20.5088C11.5439 20.7895 11.193 21 10.8421 21H10.7369C10.1755 21 9.75441 20.5439 9.75441 19.9825C9.75441 19.9123 9.75441 19.807 9.7895 19.7368L11.4386 13.1053H6.38599C5.75441 13.1053 5.26318 12.614 5.26318 11.9825Z"/>
  </svg>
);

const boltLightningFilledIconDefinition = svgToIconDefinition(
  boltLightningFilledSvg,
  'bolt-lightning-filled'
);

/**![BoltLightningFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4yNjMxOCAxMS45ODI1TDYuMjQ1NjQgMy45ODI0NkM2LjMxNTgyIDMuNDIxMDUgNi44MDcwNCAzIDcuMzY4NDUgM0gxMy4yNjMyQzEzLjc4OTUgMyAxNC4yNDU2IDMuNDU2MTQgMTQuMjQ1NiAzLjk4MjQ2QzE0LjI0NTYgNC4wODc3MiAxNC4yMTA2IDQuMTkyOTggMTQuMTc1NSA0LjI5ODI1TDEyLjU2MTQgOC42MTQwNEgxNy40Mzg2QzE4LjE0MDQgOC42MTQwNCAxOC43MzY5IDkuMjEwNTMgMTguNzM2OSA5LjkxMjI4QzE4LjczNjkgMTAuMTkzIDE4LjYzMTYgMTAuNDM4NiAxOC40OTEzIDEwLjY0OTFMMTEuNzU0NCAyMC41MDg4QzExLjU0MzkgMjAuNzg5NSAxMS4xOTMgMjEgMTAuODQyMSAyMUgxMC43MzY5QzEwLjE3NTUgMjEgOS43NTQ0MSAyMC41NDM5IDkuNzU0NDEgMTkuOTgyNUM5Ljc1NDQxIDE5LjkxMjMgOS43NTQ0MSAxOS44MDcgOS43ODk1IDE5LjczNjhMMTEuNDM4NiAxMy4xMDUzSDYuMzg1OTlDNS43NTQ0MSAxMy4xMDUzIDUuMjYzMTggMTIuNjE0IDUuMjYzMTggMTEuOTgyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={boltLightningFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BoltLightningFilledIcon';
}

export default RefIcon;
