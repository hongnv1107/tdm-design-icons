// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const squareMinusFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.42857 0H20.5714C21.5357 0.0357143 22.3393 0.375 22.9821 1.01786C23.625 1.66071 23.9643 2.46429 24 3.42857V20.5714C23.9643 21.5357 23.625 22.3393 22.9821 22.9821C22.3393 23.625 21.5357 23.9643 20.5714 24H3.42857C2.46429 23.9643 1.66071 23.625 1.01786 22.9821C0.375 22.3393 0.0357143 21.5357 0 20.5714V3.42857C0.0357143 2.46429 0.375 1.66071 1.01786 1.01786C1.66071 0.375 2.46429 0.0357143 3.42857 0ZM8.14286 10.7143C7.35714 10.7857 6.92857 11.2143 6.85714 12C6.92857 12.7857 7.35714 13.2143 8.14286 13.2857H15.8571C16.6429 13.2143 17.0714 12.7857 17.1429 12C17.0714 11.2143 16.6429 10.7857 15.8571 10.7143H8.14286Z"/>
  </svg>
);

const squareMinusFilledIconDefinition = svgToIconDefinition(
  squareMinusFilledSvg,
  'square-minus-filled'
);

/**![SquareMinusFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy40Mjg1NyAwSDIwLjU3MTRDMjEuNTM1NyAwLjAzNTcxNDMgMjIuMzM5MyAwLjM3NSAyMi45ODIxIDEuMDE3ODZDMjMuNjI1IDEuNjYwNzEgMjMuOTY0MyAyLjQ2NDI5IDI0IDMuNDI4NTdWMjAuNTcxNEMyMy45NjQzIDIxLjUzNTcgMjMuNjI1IDIyLjMzOTMgMjIuOTgyMSAyMi45ODIxQzIyLjMzOTMgMjMuNjI1IDIxLjUzNTcgMjMuOTY0MyAyMC41NzE0IDI0SDMuNDI4NTdDMi40NjQyOSAyMy45NjQzIDEuNjYwNzEgMjMuNjI1IDEuMDE3ODYgMjIuOTgyMUMwLjM3NSAyMi4zMzkzIDAuMDM1NzE0MyAyMS41MzU3IDAgMjAuNTcxNFYzLjQyODU3QzAuMDM1NzE0MyAyLjQ2NDI5IDAuMzc1IDEuNjYwNzEgMS4wMTc4NiAxLjAxNzg2QzEuNjYwNzEgMC4zNzUgMi40NjQyOSAwLjAzNTcxNDMgMy40Mjg1NyAwWk04LjE0Mjg2IDEwLjcxNDNDNy4zNTcxNCAxMC43ODU3IDYuOTI4NTcgMTEuMjE0MyA2Ljg1NzE0IDEyQzYuOTI4NTcgMTIuNzg1NyA3LjM1NzE0IDEzLjIxNDMgOC4xNDI4NiAxMy4yODU3SDE1Ljg1NzFDMTYuNjQyOSAxMy4yMTQzIDE3LjA3MTQgMTIuNzg1NyAxNy4xNDI5IDEyQzE3LjA3MTQgMTEuMjE0MyAxNi42NDI5IDEwLjc4NTcgMTUuODU3MSAxMC43MTQzSDguMTQyODZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={squareMinusFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SquareMinusFilled';
}

export default RefIcon;
