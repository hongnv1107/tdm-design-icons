// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLocationSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.373 1.5 2.235 5.57 4.294 8.556L8 13.929L11.705 8.556C13.764 5.57 11.627 1.5 8 1.5ZM3.06 9.408C0.314 5.427 3.164 0 8 0C12.835 0 15.685 5.427 12.94 9.408L8.617 15.676C8.477 15.879 8.246 16 8 16C7.753 16 7.522 15.879 7.382 15.676L3.06 9.408ZM8 5C7.447 5 7 5.448 7 6C7 6.552 7.447 7 8 7C8.552 7 9 6.552 9 6C9 5.448 8.552 5 8 5ZM5.5 6C5.5 4.619 6.619 3.5 8 3.5C9.38 3.5 10.5 4.619 10.5 6C10.5 7.381 9.38 8.5 8 8.5C6.619 8.5 5.5 7.381 5.5 6Z"/>
  </svg>
);

const aDSLocationIconDefinition = svgToIconDefinition(
  aDSLocationSvg,
  'ads-location'
);

/**![ADSLocation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuMzczIDEuNSAyLjIzNSA1LjU3IDQuMjk0IDguNTU2TDggMTMuOTI5TDExLjcwNSA4LjU1NkMxMy43NjQgNS41NyAxMS42MjcgMS41IDggMS41Wk0zLjA2IDkuNDA4QzAuMzE0IDUuNDI3IDMuMTY0IDAgOCAwQzEyLjgzNSAwIDE1LjY4NSA1LjQyNyAxMi45NCA5LjQwOEw4LjYxNyAxNS42NzZDOC40NzcgMTUuODc5IDguMjQ2IDE2IDggMTZDNy43NTMgMTYgNy41MjIgMTUuODc5IDcuMzgyIDE1LjY3NkwzLjA2IDkuNDA4Wk04IDVDNy40NDcgNSA3IDUuNDQ4IDcgNkM3IDYuNTUyIDcuNDQ3IDcgOCA3QzguNTUyIDcgOSA2LjU1MiA5IDZDOSA1LjQ0OCA4LjU1MiA1IDggNVpNNS41IDZDNS41IDQuNjE5IDYuNjE5IDMuNSA4IDMuNUM5LjM4IDMuNSAxMC41IDQuNjE5IDEwLjUgNkMxMC41IDcuMzgxIDkuMzggOC41IDggOC41QzYuNjE5IDguNSA1LjUgNy4zODEgNS41IDZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLocationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLocation';
}

export default RefIcon;
