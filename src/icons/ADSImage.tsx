// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.75 4C6.717 4 7.5 4.784 7.5 5.75C7.5 6.717 6.717 7.5 5.75 7.5C4.784 7.5 4 6.717 4 5.75C4 4.784 4.784 4 5.75 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H3.644L9.918 5.777L9.971 5.719C10.101 5.589 10.275 5.511 10.461 5.501C10.673 5.49 10.88 5.57 11.03 5.72L13.5 8.189V3C13.5 2.724 13.276 2.5 13 2.5H3ZM5.575 13.5H13C13.276 13.5 13.5 13.276 13.5 13V10.311L10.557 7.367L5.575 13.5Z"/>
  </svg>
);

const aDSImageIconDefinition = svgToIconDefinition(
  aDSImageSvg,
  'ads-image'
);

/**![ADSImage](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01Ljc1IDRDNi43MTcgNCA3LjUgNC43ODQgNy41IDUuNzVDNy41IDYuNzE3IDYuNzE3IDcuNSA1Ljc1IDcuNUM0Ljc4NCA3LjUgNCA2LjcxNyA0IDUuNzVDNCA0Ljc4NCA0Ljc4NCA0IDUuNzUgNFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDFDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNaTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgzLjY0NEw5LjkxOCA1Ljc3N0w5Ljk3MSA1LjcxOUMxMC4xMDEgNS41ODkgMTAuMjc1IDUuNTExIDEwLjQ2MSA1LjUwMUMxMC42NzMgNS40OSAxMC44OCA1LjU3IDExLjAzIDUuNzJMMTMuNSA4LjE4OVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM1pNNS41NzUgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjEwLjMxMUwxMC41NTcgNy4zNjdMNS41NzUgMTMuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImage';
}

export default RefIcon;
