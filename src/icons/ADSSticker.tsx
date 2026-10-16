// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStickerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 10.893 3.39 13.345 6.002 14.187C6.001 14.125 6 14.063 6 14C6 12.898 6.223 11.847 6.627 10.89C7.84 8.018 10.684 6 14 6C14.063 6 14.125 6.001 14.187 6.002C13.345 3.39 10.893 1.5 8 1.5ZM13.413 7.526C10.975 7.744 8.923 9.309 8.009 11.473C7.754 12.078 7.587 12.73 7.526 13.413L13.413 7.526ZM0 8C0 3.582 3.582 0 8 0C11.984 0 15.287 2.912 15.899 6.723C15.937 6.961 15.859 7.202 15.688 7.372L7.372 15.688C7.202 15.859 6.961 15.937 6.723 15.899C2.912 15.287 0 11.984 0 8Z"/>
  </svg>
);

const aDSStickerIconDefinition = svgToIconDefinition(
  aDSStickerSvg,
  'ads-sticker'
);

/**![ADSSticker](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDEwLjg5MyAzLjM5IDEzLjM0NSA2LjAwMiAxNC4xODdDNi4wMDEgMTQuMTI1IDYgMTQuMDYzIDYgMTRDNiAxMi44OTggNi4yMjMgMTEuODQ3IDYuNjI3IDEwLjg5QzcuODQgOC4wMTggMTAuNjg0IDYgMTQgNkMxNC4wNjMgNiAxNC4xMjUgNi4wMDEgMTQuMTg3IDYuMDAyQzEzLjM0NSAzLjM5IDEwLjg5MyAxLjUgOCAxLjVaTTEzLjQxMyA3LjUyNkMxMC45NzUgNy43NDQgOC45MjMgOS4zMDkgOC4wMDkgMTEuNDczQzcuNzU0IDEyLjA3OCA3LjU4NyAxMi43MyA3LjUyNiAxMy40MTNMMTMuNDEzIDcuNTI2Wk0wIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMS45ODQgMCAxNS4yODcgMi45MTIgMTUuODk5IDYuNzIzQzE1LjkzNyA2Ljk2MSAxNS44NTkgNy4yMDIgMTUuNjg4IDcuMzcyTDcuMzcyIDE1LjY4OEM3LjIwMiAxNS44NTkgNi45NjEgMTUuOTM3IDYuNzIzIDE1Ljg5OUMyLjkxMiAxNS4yODcgMCAxMS45ODQgMCA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStickerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSticker';
}

export default RefIcon;
