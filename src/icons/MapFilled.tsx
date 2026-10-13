// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mapFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 21.3141L8 18.9836V2.67022L16 5.0007V21.3141ZM17.3333 21.2717V4.87358L22.625 2.75496C22.9861 2.61372 23.2917 2.64197 23.5417 2.83971C23.8194 3.03745 23.9722 3.31993 24 3.68716V17.8819C23.9722 18.3056 23.7639 18.6164 23.375 18.8141L17.3333 21.2717ZM0.625 5.17019L6.66667 2.71259V19.1107L1.375 21.2717C1.01389 21.3847 0.708333 21.3423 0.458333 21.1446C0.180556 20.9469 0.0277778 20.6644 0 20.2972V6.10239C0.0277778 5.67866 0.236111 5.36793 0.625 5.17019Z"/>
  </svg>
);

const mapFilledIconDefinition = svgToIconDefinition(
  mapFilledSvg,
  'map-filled'
);

/**![MapFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTYgMjEuMzE0MUw4IDE4Ljk4MzZWMi42NzAyMkwxNiA1LjAwMDdWMjEuMzE0MVpNMTcuMzMzMyAyMS4yNzE3VjQuODczNThMMjIuNjI1IDIuNzU0OTZDMjIuOTg2MSAyLjYxMzcyIDIzLjI5MTcgMi42NDE5NyAyMy41NDE3IDIuODM5NzFDMjMuODE5NCAzLjAzNzQ1IDIzLjk3MjIgMy4zMTk5MyAyNCAzLjY4NzE2VjE3Ljg4MTlDMjMuOTcyMiAxOC4zMDU2IDIzLjc2MzkgMTguNjE2NCAyMy4zNzUgMTguODE0MUwxNy4zMzMzIDIxLjI3MTdaTTAuNjI1IDUuMTcwMTlMNi42NjY2NyAyLjcxMjU5VjE5LjExMDdMMS4zNzUgMjEuMjcxN0MxLjAxMzg5IDIxLjM4NDcgMC43MDgzMzMgMjEuMzQyMyAwLjQ1ODMzMyAyMS4xNDQ2QzAuMTgwNTU2IDIwLjk0NjkgMC4wMjc3Nzc4IDIwLjY2NDQgMCAyMC4yOTcyVjYuMTAyMzlDMC4wMjc3Nzc4IDUuNjc4NjYgMC4yMzYxMTEgNS4zNjc5MyAwLjYyNSA1LjE3MDE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mapFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MapFilled';
}

export default RefIcon;
