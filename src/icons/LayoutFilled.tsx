// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const layoutFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.3334 0.00012207H2.66689C1.19414 0.00012207 0.000247317 1.19402 0.000247317 2.66676V6.66672H24V2.66676C24 1.19402 22.8061 0.00012207 21.3334 0.00012207Z"/><path d="M6.66685 23.9999H2.66689C1.19414 23.9999 0.000247377 22.806 0.000247377 21.3332L0 9.33336H6.66685V23.9999Z"/><path d="M9.33348 23.9999H21.3331C22.8059 23.9999 23.9998 22.806 23.9998 21.3332L24 9.33336H9.33348V23.9999Z"/>
  </svg>
);

const layoutFilledIconDefinition = svgToIconDefinition(
  layoutFilledSvg,
  'layout-filled'
);

/**![LayoutFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuMzMzNCAwLjAwMDEyMjA3SDIuNjY2ODlDMS4xOTQxNCAwLjAwMDEyMjA3IDAuMDAwMjQ3MzE3IDEuMTk0MDIgMC4wMDAyNDczMTcgMi42NjY3NlY2LjY2NjcySDI0VjIuNjY2NzZDMjQgMS4xOTQwMiAyMi44MDYxIDAuMDAwMTIyMDcgMjEuMzMzNCAwLjAwMDEyMjA3WiIvPjxwYXRoIGQ9Ik02LjY2Njg1IDIzLjk5OTlIMi42NjY4OUMxLjE5NDE0IDIzLjk5OTkgMC4wMDAyNDczNzcgMjIuODA2IDAuMDAwMjQ3Mzc3IDIxLjMzMzJMMCA5LjMzMzM2SDYuNjY2ODVWMjMuOTk5OVoiLz48cGF0aCBkPSJNOS4zMzM0OCAyMy45OTk5SDIxLjMzMzFDMjIuODA1OSAyMy45OTk5IDIzLjk5OTggMjIuODA2IDIzLjk5OTggMjEuMzMzMkwyNCA5LjMzMzM2SDkuMzMzNDhWMjMuOTk5OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={layoutFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutFilled';
}

export default RefIcon;
