// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const zoomOutFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.0064 10.7405C17.0064 12.1759 16.5374 13.5177 15.7557 14.5786L19.6952 18.5416C20.1016 18.916 20.1016 19.5713 19.6952 19.9458C19.32 20.3514 18.6634 20.3514 18.2882 19.9458L14.3175 15.9828C13.2545 16.7941 11.9101 17.231 10.5032 17.231C6.90767 17.231 4 14.329 4 10.7405C4 7.1832 6.90767 4.25 10.5032 4.25C14.0674 4.25 17.0064 7.1832 17.0064 10.7405ZM8.25208 9.99159C7.81436 9.99159 7.50171 10.3348 7.50171 10.7405C7.50171 11.1774 7.81436 11.4894 8.25208 11.4894H12.7543C13.1607 11.4894 13.5046 11.1774 13.5046 10.7405C13.5046 10.3348 13.1607 9.99159 12.7543 9.99159H8.25208Z"/>
  </svg>
);

const zoomOutFilledIconDefinition = svgToIconDefinition(
  zoomOutFilledSvg,
  'zoom-out-filled'
);

/**![ZoomOutFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4wMDY0IDEwLjc0MDVDMTcuMDA2NCAxMi4xNzU5IDE2LjUzNzQgMTMuNTE3NyAxNS43NTU3IDE0LjU3ODZMMTkuNjk1MiAxOC41NDE2QzIwLjEwMTYgMTguOTE2IDIwLjEwMTYgMTkuNTcxMyAxOS42OTUyIDE5Ljk0NThDMTkuMzIgMjAuMzUxNCAxOC42NjM0IDIwLjM1MTQgMTguMjg4MiAxOS45NDU4TDE0LjMxNzUgMTUuOTgyOEMxMy4yNTQ1IDE2Ljc5NDEgMTEuOTEwMSAxNy4yMzEgMTAuNTAzMiAxNy4yMzFDNi45MDc2NyAxNy4yMzEgNCAxNC4zMjkgNCAxMC43NDA1QzQgNy4xODMyIDYuOTA3NjcgNC4yNSAxMC41MDMyIDQuMjVDMTQuMDY3NCA0LjI1IDE3LjAwNjQgNy4xODMyIDE3LjAwNjQgMTAuNzQwNVpNOC4yNTIwOCA5Ljk5MTU5QzcuODE0MzYgOS45OTE1OSA3LjUwMTcxIDEwLjMzNDggNy41MDE3MSAxMC43NDA1QzcuNTAxNzEgMTEuMTc3NCA3LjgxNDM2IDExLjQ4OTQgOC4yNTIwOCAxMS40ODk0SDEyLjc1NDNDMTMuMTYwNyAxMS40ODk0IDEzLjUwNDYgMTEuMTc3NCAxMy41MDQ2IDEwLjc0MDVDMTMuNTA0NiAxMC4zMzQ4IDEzLjE2MDcgOS45OTE1OSAxMi43NTQzIDkuOTkxNTlIOC4yNTIwOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={zoomOutFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZoomOutFilledIcon';
}

export default RefIcon;
