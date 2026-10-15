// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStickerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSSticker](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMC44OTMgMy4zOSAxMy4zNDUgNi4wMDIgMTQuMTg3QzYuMDAxIDE0LjEyNSA2IDE0LjA2MyA2IDE0QzYgMTIuODk4IDYuMjIzIDExLjg0NyA2LjYyNyAxMC44OUM3Ljg0IDguMDE4IDEwLjY4NCA2IDE0IDZDMTQuMDYzIDYgMTQuMTI1IDYuMDAxIDE0LjE4NyA2LjAwMkMxMy4zNDUgMy4zOSAxMC44OTMgMS41IDggMS41Wk0xMy40MTMgNy41MjZDMTAuOTc1IDcuNzQ0IDguOTIzIDkuMzA5IDguMDA5IDExLjQ3M0M3Ljc1NCAxMi4wNzggNy41ODcgMTIuNzMgNy41MjYgMTMuNDEzTDEzLjQxMyA3LjUyNlpNMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTEuOTg0IDAgMTUuMjg3IDIuOTEyIDE1Ljg5OSA2LjcyM0MxNS45MzcgNi45NjEgMTUuODU5IDcuMjAyIDE1LjY4OCA3LjM3Mkw3LjM3MiAxNS42ODhDNy4yMDIgMTUuODU5IDYuOTYxIDE1LjkzNyA2LjcyMyAxNS44OTlDMi45MTIgMTUuMjg3IDAgMTEuOTg0IDAgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStickerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSticker';
}

export default RefIcon;
