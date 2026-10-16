// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSThumbsUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.708 2.594C8.463 2.385 8.087 2.458 7.939 2.743L5.5 7.433V13.5H11.872C12.364 13.5 12.799 13.18 12.945 12.711L14.273 8.46C14.5 7.736 13.959 7 13.2 7H9.75C9.336 7 9 6.664 9 6.25V3.075C9 2.929 8.936 2.79 8.825 2.695L8.708 2.594ZM4 13.5V8H2C1.724 8 1.5 8.224 1.5 8.5V13C1.5 13.276 1.724 13.5 2 13.5H4ZM4.295 6.5L6.608 2.051C7.202 0.908 8.706 0.617 9.684 1.455L9.802 1.556C10.245 1.936 10.5 2.491 10.5 3.075V5.5H13.2C14.971 5.5 16.233 7.218 15.705 8.908L14.377 13.158C14.035 14.254 13.02 15 11.872 15H2C0.895 15 0 14.105 0 13V8.5C0 7.395 0.895 6.5 2 6.5H4.295Z"/>
  </svg>
);

const aDSThumbsUpIconDefinition = svgToIconDefinition(
  aDSThumbsUpSvg,
  'ads-thumbs-up'
);

/**![ADSThumbsUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43MDggMi41OTRDOC40NjMgMi4zODUgOC4wODcgMi40NTggNy45MzkgMi43NDNMNS41IDcuNDMzVjEzLjVIMTEuODcyQzEyLjM2NCAxMy41IDEyLjc5OSAxMy4xOCAxMi45NDUgMTIuNzExTDE0LjI3MyA4LjQ2QzE0LjUgNy43MzYgMTMuOTU5IDcgMTMuMiA3SDkuNzVDOS4zMzYgNyA5IDYuNjY0IDkgNi4yNVYzLjA3NUM5IDIuOTI5IDguOTM2IDIuNzkgOC44MjUgMi42OTVMOC43MDggMi41OTRaTTQgMTMuNVY4SDJDMS43MjQgOCAxLjUgOC4yMjQgMS41IDguNVYxM0MxLjUgMTMuMjc2IDEuNzI0IDEzLjUgMiAxMy41SDRaTTQuMjk1IDYuNUw2LjYwOCAyLjA1MUM3LjIwMiAwLjkwOCA4LjcwNiAwLjYxNyA5LjY4NCAxLjQ1NUw5LjgwMiAxLjU1NkMxMC4yNDUgMS45MzYgMTAuNSAyLjQ5MSAxMC41IDMuMDc1VjUuNUgxMy4yQzE0Ljk3MSA1LjUgMTYuMjMzIDcuMjE4IDE1LjcwNSA4LjkwOEwxNC4zNzcgMTMuMTU4QzE0LjAzNSAxNC4yNTQgMTMuMDIgMTUgMTEuODcyIDE1SDJDMC44OTUgMTUgMCAxNC4xMDUgMCAxM1Y4LjVDMCA3LjM5NSAwLjg5NSA2LjUgMiA2LjVINC4yOTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSThumbsUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSThumbsUp';
}

export default RefIcon;
