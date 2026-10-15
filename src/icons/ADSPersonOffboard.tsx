// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPersonOffboardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 12.75C1 10.679 2.679 9 4.75 9H9V10.5H4.75C3.507 10.5 2.5 11.507 2.5 12.75V15H1V12.75ZM9.5 4C9.5 2.619 8.381 1.5 7 1.5C5.619 1.5 4.5 2.619 4.5 4C4.5 5.381 5.619 6.5 7 6.5C8.381 6.5 9.5 5.381 9.5 4ZM11 4C11 6.209 9.209 8 7 8C4.791 8 3 6.209 3 4C3 1.791 4.791 0 7 0C9.209 0 11 1.791 11 4Z"/><path d="M15.78 12.219C16.073 12.512 16.073 12.986 15.78 13.279L13.155 15.904L12.095 14.844L13.44 13.499H9.5V11.999H13.44L12.095 10.654L13.155 9.594L15.78 12.219Z"/>
  </svg>
);

const aDSPersonOffboardIconDefinition = svgToIconDefinition(
  aDSPersonOffboardSvg,
  'ads-person-offboard'
);

/**![ADSPersonOffboard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxMi43NUMxIDEwLjY3OSAyLjY3OSA5IDQuNzUgOUg5VjEwLjVINC43NUMzLjUwNyAxMC41IDIuNSAxMS41MDcgMi41IDEyLjc1VjE1SDFWMTIuNzVaTTkuNSA0QzkuNSAyLjYxOSA4LjM4MSAxLjUgNyAxLjVDNS42MTkgMS41IDQuNSAyLjYxOSA0LjUgNEM0LjUgNS4zODEgNS42MTkgNi41IDcgNi41QzguMzgxIDYuNSA5LjUgNS4zODEgOS41IDRaTTExIDRDMTEgNi4yMDkgOS4yMDkgOCA3IDhDNC43OTEgOCAzIDYuMjA5IDMgNEMzIDEuNzkxIDQuNzkxIDAgNyAwQzkuMjA5IDAgMTEgMS43OTEgMTEgNFoiLz48cGF0aCBkPSJNMTUuNzggMTIuMjE5QzE2LjA3MyAxMi41MTIgMTYuMDczIDEyLjk4NiAxNS43OCAxMy4yNzlMMTMuMTU1IDE1LjkwNEwxMi4wOTUgMTQuODQ0TDEzLjQ0IDEzLjQ5OUg5LjVWMTEuOTk5SDEzLjQ0TDEyLjA5NSAxMC42NTRMMTMuMTU1IDkuNTk0TDE1Ljc4IDEyLjIxOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPersonOffboardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPersonOffboard';
}

export default RefIcon;
