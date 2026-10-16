// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextIndentLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1L15 2.5ZM2.811 8L5.03 5.78L3.97 4.72L1.22 7.47C0.927 7.763 0.927 8.237 1.22 8.53L3.97 11.28L5.03 10.22L2.811 8ZM15 6.667L8 6.667L8 5.167L15 5.167L15 6.667ZM15 10.833L8 10.833L8 9.333L15 9.333L15 10.833ZM15 15L1 15L1 13.5L15 13.5L15 15Z"/>
  </svg>
);

const aDSTextIndentLeftIconDefinition = svgToIconDefinition(
  aDSTextIndentLeftSvg,
  'ads-text-indent-left'
);

/**![ADSTextIndentLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxTDE1IDIuNVpNMi44MTEgOEw1LjAzIDUuNzhMMy45NyA0LjcyTDEuMjIgNy40N0MwLjkyNyA3Ljc2MyAwLjkyNyA4LjIzNyAxLjIyIDguNTNMMy45NyAxMS4yOEw1LjAzIDEwLjIyTDIuODExIDhaTTE1IDYuNjY3TDggNi42NjdMOCA1LjE2N0wxNSA1LjE2N0wxNSA2LjY2N1pNMTUgMTAuODMzTDggMTAuODMzTDggOS4zMzNMMTUgOS4zMzNMMTUgMTAuODMzWk0xNSAxNUwxIDE1TDEgMTMuNUwxNSAxMy41TDE1IDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIndentLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextIndentLeft';
}

export default RefIcon;
