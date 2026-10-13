// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chartPieFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.7353 10.6265C23.4739 10.6265 24.0812 10.0255 23.9891 9.29272C23.8702 8.34577 23.6249 7.41697 23.2582 6.53153C22.7206 5.23325 21.9326 4.05361 20.9392 3.05995C19.9458 2.06629 18.7664 1.27808 17.4685 0.740318C16.5834 0.373599 15.6549 0.128244 14.7083 0.00926584C13.9756 -0.0828401 13.3745 0.524493 13.3745 1.26305V9.28925C13.3745 10.0278 13.9733 10.6265 14.7118 10.6265H22.7353Z"/><path d="M10.7 24C16.1565 24 20.6589 19.915 21.3158 14.6364C21.407 13.9035 20.7995 13.3017 20.0609 13.3017H12.0373C11.2987 13.3017 10.7 12.703 10.7 11.9645V3.94076C10.7 3.2022 10.0983 2.59471 9.36534 2.68592C4.08672 3.34281 0.00170898 7.84522 0.00170898 13.3017C0.00170898 19.2102 4.79148 24 10.7 24Z"/>
  </svg>
);

const chartPieFilledIconDefinition = svgToIconDefinition(
  chartPieFilledSvg,
  'chart-pie-filled'
);

/**![ChartPieFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuNzM1MyAxMC42MjY1QzIzLjQ3MzkgMTAuNjI2NSAyNC4wODEyIDEwLjAyNTUgMjMuOTg5MSA5LjI5MjcyQzIzLjg3MDIgOC4zNDU3NyAyMy42MjQ5IDcuNDE2OTcgMjMuMjU4MiA2LjUzMTUzQzIyLjcyMDYgNS4yMzMyNSAyMS45MzI2IDQuMDUzNjEgMjAuOTM5MiAzLjA1OTk1QzE5Ljk0NTggMi4wNjYyOSAxOC43NjY0IDEuMjc4MDggMTcuNDY4NSAwLjc0MDMxOEMxNi41ODM0IDAuMzczNTk5IDE1LjY1NDkgMC4xMjgyNDQgMTQuNzA4MyAwLjAwOTI2NTg0QzEzLjk3NTYgLTAuMDgyODQwMSAxMy4zNzQ1IDAuNTI0NDkzIDEzLjM3NDUgMS4yNjMwNVY5LjI4OTI1QzEzLjM3NDUgMTAuMDI3OCAxMy45NzMzIDEwLjYyNjUgMTQuNzExOCAxMC42MjY1SDIyLjczNTNaIi8+PHBhdGggZD0iTTEwLjcgMjRDMTYuMTU2NSAyNCAyMC42NTg5IDE5LjkxNSAyMS4zMTU4IDE0LjYzNjRDMjEuNDA3IDEzLjkwMzUgMjAuNzk5NSAxMy4zMDE3IDIwLjA2MDkgMTMuMzAxN0gxMi4wMzczQzExLjI5ODcgMTMuMzAxNyAxMC43IDEyLjcwMyAxMC43IDExLjk2NDVWMy45NDA3NkMxMC43IDMuMjAyMiAxMC4wOTgzIDIuNTk0NzEgOS4zNjUzNCAyLjY4NTkyQzQuMDg2NzIgMy4zNDI4MSAwLjAwMTcwODk4IDcuODQ1MjIgMC4wMDE3MDg5OCAxMy4zMDE3QzAuMDAxNzA4OTggMTkuMjEwMiA0Ljc5MTQ4IDI0IDEwLjcgMjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chartPieFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChartPieFilled';
}

export default RefIcon;
