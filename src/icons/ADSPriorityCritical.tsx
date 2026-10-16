// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityCriticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.837 14.836C13.067 14.988 13.363 15.001 13.606 14.87C13.848 14.74 14 14.486 14 14.21V5.21C14 4.958 13.873 4.723 13.663 4.584L8.413 1.123C8.163 0.958 7.837 0.958 7.587 1.123L2.337 4.584C2.127 4.723 2 4.958 2 5.21V14.21L2.007 14.313C2.039 14.548 2.182 14.756 2.395 14.87C2.637 15.001 2.933 14.988 3.163 14.836L8 11.649L12.837 14.836ZM8.413 10.123C8.163 9.958 7.837 9.958 7.587 10.123L3.5 12.818V5.614L8 2.649L12.5 5.614V12.818L8.413 10.123Z"/>
  </svg>
);

const aDSPriorityCriticalIconDefinition = svgToIconDefinition(
  aDSPriorityCriticalSvg,
  'ads-priority-critical'
);

/**![ADSPriorityCritical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi44MzcgMTQuODM2QzEzLjA2NyAxNC45ODggMTMuMzYzIDE1LjAwMSAxMy42MDYgMTQuODdDMTMuODQ4IDE0Ljc0IDE0IDE0LjQ4NiAxNCAxNC4yMVY1LjIxQzE0IDQuOTU4IDEzLjg3MyA0LjcyMyAxMy42NjMgNC41ODRMOC40MTMgMS4xMjNDOC4xNjMgMC45NTggNy44MzcgMC45NTggNy41ODcgMS4xMjNMMi4zMzcgNC41ODRDMi4xMjcgNC43MjMgMiA0Ljk1OCAyIDUuMjFWMTQuMjFMMi4wMDcgMTQuMzEzQzIuMDM5IDE0LjU0OCAyLjE4MiAxNC43NTYgMi4zOTUgMTQuODdDMi42MzcgMTUuMDAxIDIuOTMzIDE0Ljk4OCAzLjE2MyAxNC44MzZMOCAxMS42NDlMMTIuODM3IDE0LjgzNlpNOC40MTMgMTAuMTIzQzguMTYzIDkuOTU4IDcuODM3IDkuOTU4IDcuNTg3IDEwLjEyM0wzLjUgMTIuODE4VjUuNjE0TDggMi42NDlMMTIuNSA1LjYxNFYxMi44MThMOC40MTMgMTAuMTIzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityCriticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityCritical';
}

export default RefIcon;
