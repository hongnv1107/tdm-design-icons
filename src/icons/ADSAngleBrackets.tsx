// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAngleBracketsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.315 14.446L10.315 0.945L11.685 1.555L5.685 15.055L4.315 14.446ZM13.982 10L11.057 12.145L11.944 13.355L15.694 10.605C15.886 10.464 16 10.239 16 10C16 9.761 15.886 9.537 15.694 9.395L11.944 6.645L11.057 7.855L13.982 10ZM2.018 6L4.944 8.145L4.056 9.355L0.306 6.605C0.114 6.464 0 6.239 0 6C0 5.761 0.114 5.537 0.306 5.395L4.056 2.645L4.944 3.855L2.018 6Z"/>
  </svg>
);

const aDSAngleBracketsIconDefinition = svgToIconDefinition(
  aDSAngleBracketsSvg,
  'ads-angle-brackets'
);

/**![ADSAngleBrackets](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4zMTUgMTQuNDQ2TDEwLjMxNSAwLjk0NUwxMS42ODUgMS41NTVMNS42ODUgMTUuMDU1TDQuMzE1IDE0LjQ0NlpNMTMuOTgyIDEwTDExLjA1NyAxMi4xNDVMMTEuOTQ0IDEzLjM1NUwxNS42OTQgMTAuNjA1QzE1Ljg4NiAxMC40NjQgMTYgMTAuMjM5IDE2IDEwQzE2IDkuNzYxIDE1Ljg4NiA5LjUzNyAxNS42OTQgOS4zOTVMMTEuOTQ0IDYuNjQ1TDExLjA1NyA3Ljg1NUwxMy45ODIgMTBaTTIuMDE4IDZMNC45NDQgOC4xNDVMNC4wNTYgOS4zNTVMMC4zMDYgNi42MDVDMC4xMTQgNi40NjQgMCA2LjIzOSAwIDZDMCA1Ljc2MSAwLjExNCA1LjUzNyAwLjMwNiA1LjM5NUw0LjA1NiAyLjY0NUw0Ljk0NCAzLjg1NUwyLjAxOCA2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAngleBracketsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAngleBrackets';
}

export default RefIcon;
