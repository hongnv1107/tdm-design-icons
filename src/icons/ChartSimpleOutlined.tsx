// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chartSimpleOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 8.4C18 7.73726 18.5372 7.2 19.2 7.2C19.8627 7.2 20.4 7.73726 20.4 8.4L20.4 22.8C20.4 23.4627 19.8627 24 19.2 24C18.5372 24 18 23.4627 18 22.8L18 8.4ZM10.8 1.2C10.8 0.537258 11.3372 -3.38206e-07 12 -3.67176e-07C12.6627 -3.96145e-07 13.2 0.537258 13.2 1.2L13.2 22.8C13.2 23.4627 12.6627 24 12 24C11.3372 24 10.8 23.4627 10.8 22.8L10.8 1.2ZM3.59997 13.2C3.59997 12.5373 4.13723 12 4.79997 12C5.46272 12 5.99997 12.5373 5.99997 13.2L5.99998 22.8C5.99998 23.4627 5.46272 24 4.79998 24C4.13723 24 3.59998 23.4627 3.59998 22.8L3.59997 13.2Z"/>
  </svg>
);

const chartSimpleOutlinedIconDefinition = svgToIconDefinition(
  chartSimpleOutlinedSvg,
  'chart-simple-outlined'
);

/**![ChartSimpleOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTggOC40QzE4IDcuNzM3MjYgMTguNTM3MiA3LjIgMTkuMiA3LjJDMTkuODYyNyA3LjIgMjAuNCA3LjczNzI2IDIwLjQgOC40TDIwLjQgMjIuOEMyMC40IDIzLjQ2MjcgMTkuODYyNyAyNCAxOS4yIDI0QzE4LjUzNzIgMjQgMTggMjMuNDYyNyAxOCAyMi44TDE4IDguNFpNMTAuOCAxLjJDMTAuOCAwLjUzNzI1OCAxMS4zMzcyIC0zLjM4MjA2ZS0wNyAxMiAtMy42NzE3NmUtMDdDMTIuNjYyNyAtMy45NjE0NWUtMDcgMTMuMiAwLjUzNzI1OCAxMy4yIDEuMkwxMy4yIDIyLjhDMTMuMiAyMy40NjI3IDEyLjY2MjcgMjQgMTIgMjRDMTEuMzM3MiAyNCAxMC44IDIzLjQ2MjcgMTAuOCAyMi44TDEwLjggMS4yWk0zLjU5OTk3IDEzLjJDMy41OTk5NyAxMi41MzczIDQuMTM3MjMgMTIgNC43OTk5NyAxMkM1LjQ2MjcyIDEyIDUuOTk5OTcgMTIuNTM3MyA1Ljk5OTk3IDEzLjJMNS45OTk5OCAyMi44QzUuOTk5OTggMjMuNDYyNyA1LjQ2MjcyIDI0IDQuNzk5OTggMjRDNC4xMzcyMyAyNCAzLjU5OTk4IDIzLjQ2MjcgMy41OTk5OCAyMi44TDMuNTk5OTcgMTMuMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chartSimpleOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChartSimpleOutlined';
}

export default RefIcon;
