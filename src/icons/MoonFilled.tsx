// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moonFilledSvg = (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.9464 0V0.0535714C14.2679 0.0535714 14.6429 0.0535714 14.9643 0.0535714C15.3393 0.107143 15.6607 0.375 15.7143 0.75C15.8214 1.125 15.6607 1.5 15.3393 1.66071C12.4464 3.26786 10.5179 6.375 10.5179 9.85714C10.5179 15.1071 14.75 19.2857 19.9464 19.2857C20.4821 19.2857 21.0179 19.2857 21.5536 19.1786C21.9286 19.125 22.3036 19.2857 22.4643 19.6071C22.625 19.9821 22.5714 20.3571 22.3036 20.625C20.1607 22.7143 17.2143 24 13.9464 24C7.35714 24 2 18.6429 2 12C2 5.41071 7.35714 0 13.9464 0Z"/>
  </svg>
);

const moonFilledIconDefinition = svgToIconDefinition(
  moonFilledSvg,
  'moon-filled'
);

/**![MoonFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMyAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTQ2NCAwVjAuMDUzNTcxNEMxNC4yNjc5IDAuMDUzNTcxNCAxNC42NDI5IDAuMDUzNTcxNCAxNC45NjQzIDAuMDUzNTcxNEMxNS4zMzkzIDAuMTA3MTQzIDE1LjY2MDcgMC4zNzUgMTUuNzE0MyAwLjc1QzE1LjgyMTQgMS4xMjUgMTUuNjYwNyAxLjUgMTUuMzM5MyAxLjY2MDcxQzEyLjQ0NjQgMy4yNjc4NiAxMC41MTc5IDYuMzc1IDEwLjUxNzkgOS44NTcxNEMxMC41MTc5IDE1LjEwNzEgMTQuNzUgMTkuMjg1NyAxOS45NDY0IDE5LjI4NTdDMjAuNDgyMSAxOS4yODU3IDIxLjAxNzkgMTkuMjg1NyAyMS41NTM2IDE5LjE3ODZDMjEuOTI4NiAxOS4xMjUgMjIuMzAzNiAxOS4yODU3IDIyLjQ2NDMgMTkuNjA3MUMyMi42MjUgMTkuOTgyMSAyMi41NzE0IDIwLjM1NzEgMjIuMzAzNiAyMC42MjVDMjAuMTYwNyAyMi43MTQzIDE3LjIxNDMgMjQgMTMuOTQ2NCAyNEM3LjM1NzE0IDI0IDIgMTguNjQyOSAyIDEyQzIgNS40MTA3MSA3LjM1NzE0IDAgMTMuOTQ2NCAwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moonFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoonFilled';
}

export default RefIcon;
