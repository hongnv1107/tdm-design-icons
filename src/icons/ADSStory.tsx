// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStorySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.518 3C11.518 2.724 11.294 2.5 11.018 2.5H4.982C4.706 2.5 4.482 2.724 4.482 3V12.806L8 10.333L8.431 10.637L11.518 12.806V3ZM13.018 14.202C13.017 14.79 12.396 15.15 11.896 14.896L11.797 14.836L7.999 12.166L4.203 14.836C3.69 15.197 2.983 14.83 2.982 14.202V3C2.982 1.895 3.878 1 4.982 1H11.018C12.122 1 13.018 1.895 13.018 3V14.202Z"/>
  </svg>
);

const aDSStoryIconDefinition = svgToIconDefinition(
  aDSStorySvg,
  'ads-story'
);

/**![ADSStory](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS41MTggM0MxMS41MTggMi43MjQgMTEuMjk0IDIuNSAxMS4wMTggMi41SDQuOTgyQzQuNzA2IDIuNSA0LjQ4MiAyLjcyNCA0LjQ4MiAzVjEyLjgwNkw4IDEwLjMzM0w4LjQzMSAxMC42MzdMMTEuNTE4IDEyLjgwNlYzWk0xMy4wMTggMTQuMjAyQzEzLjAxNyAxNC43OSAxMi4zOTYgMTUuMTUgMTEuODk2IDE0Ljg5NkwxMS43OTcgMTQuODM2TDcuOTk5IDEyLjE2Nkw0LjIwMyAxNC44MzZDMy42OSAxNS4xOTcgMi45ODMgMTQuODMgMi45ODIgMTQuMjAyVjNDMi45ODIgMS44OTUgMy44NzggMSA0Ljk4MiAxSDExLjAxOEMxMi4xMjIgMSAxMy4wMTggMS44OTUgMTMuMDE4IDNWMTQuMjAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStoryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStory';
}

export default RefIcon;
