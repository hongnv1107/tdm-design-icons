// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCopySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H11C12.105 1 13 1.895 13 3V11C13 12.105 12.105 13 11 13H3C1.895 13 1 12.105 1 11V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V11C2.5 11.276 2.724 11.5 3 11.5H11C11.276 11.5 11.5 11.276 11.5 11V3C11.5 2.724 11.276 2.5 11 2.5H3ZM16 6V12.75C16 14.545 14.545 16 12.75 16H6V14.5H12.75C13.717 14.5 14.5 13.717 14.5 12.75V6H16Z"/>
  </svg>
);

const aDSCopyIconDefinition = svgToIconDefinition(
  aDSCopySvg,
  'ads-copy'
);

/**![ADSCopy](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTFDMTIuMTA1IDEgMTMgMS44OTUgMTMgM1YxMUMxMyAxMi4xMDUgMTIuMTA1IDEzIDExIDEzSDNDMS44OTUgMTMgMSAxMi4xMDUgMSAxMVYzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjExQzIuNSAxMS4yNzYgMi43MjQgMTEuNSAzIDExLjVIMTFDMTEuMjc2IDExLjUgMTEuNSAxMS4yNzYgMTEuNSAxMVYzQzExLjUgMi43MjQgMTEuMjc2IDIuNSAxMSAyLjVIM1pNMTYgNlYxMi43NUMxNiAxNC41NDUgMTQuNTQ1IDE2IDEyLjc1IDE2SDZWMTQuNUgxMi43NUMxMy43MTcgMTQuNSAxNC41IDEzLjcxNyAxNC41IDEyLjc1VjZIMTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCopyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCopy';
}

export default RefIcon;
