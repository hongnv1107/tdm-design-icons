// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const barsFilterOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3.4286C0.0714286 2.64288 0.5 2.21431 1.28571 2.14288H22.7143C23.5 2.21431 23.9286 2.64288 24 3.4286C23.9286 4.21431 23.5 4.64288 22.7143 4.71431H1.28571C0.5 4.64288 0.0714286 4.21431 0 3.4286ZM3.42857 12C3.5 11.2143 3.92857 10.7857 4.71429 10.7143H19.2857C20.0714 10.7857 20.5 11.2143 20.5714 12C20.5 12.7857 20.0714 13.2143 19.2857 13.2857H4.71429C3.92857 13.2143 3.5 12.7857 3.42857 12ZM15.4286 20.5715C15.3571 21.3572 14.9286 21.7857 14.1429 21.8572H9.85714C9.07143 21.7857 8.64286 21.3572 8.57143 20.5715C8.64286 19.7857 9.07143 19.3572 9.85714 19.2857H14.1429C14.9286 19.3572 15.3571 19.7857 15.4286 20.5715Z"/>
  </svg>
);

const barsFilterOutlinedIconDefinition = svgToIconDefinition(
  barsFilterOutlinedSvg,
  'bars-filter-outlined'
);

/**![BarsFilterOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMCAzLjQyODZDMC4wNzE0Mjg2IDIuNjQyODggMC41IDIuMjE0MzEgMS4yODU3MSAyLjE0Mjg4SDIyLjcxNDNDMjMuNSAyLjIxNDMxIDIzLjkyODYgMi42NDI4OCAyNCAzLjQyODZDMjMuOTI4NiA0LjIxNDMxIDIzLjUgNC42NDI4OCAyMi43MTQzIDQuNzE0MzFIMS4yODU3MUMwLjUgNC42NDI4OCAwLjA3MTQyODYgNC4yMTQzMSAwIDMuNDI4NlpNMy40Mjg1NyAxMkMzLjUgMTEuMjE0MyAzLjkyODU3IDEwLjc4NTcgNC43MTQyOSAxMC43MTQzSDE5LjI4NTdDMjAuMDcxNCAxMC43ODU3IDIwLjUgMTEuMjE0MyAyMC41NzE0IDEyQzIwLjUgMTIuNzg1NyAyMC4wNzE0IDEzLjIxNDMgMTkuMjg1NyAxMy4yODU3SDQuNzE0MjlDMy45Mjg1NyAxMy4yMTQzIDMuNSAxMi43ODU3IDMuNDI4NTcgMTJaTTE1LjQyODYgMjAuNTcxNUMxNS4zNTcxIDIxLjM1NzIgMTQuOTI4NiAyMS43ODU3IDE0LjE0MjkgMjEuODU3Mkg5Ljg1NzE0QzkuMDcxNDMgMjEuNzg1NyA4LjY0Mjg2IDIxLjM1NzIgOC41NzE0MyAyMC41NzE1QzguNjQyODYgMTkuNzg1NyA5LjA3MTQzIDE5LjM1NzIgOS44NTcxNCAxOS4yODU3SDE0LjE0MjlDMTQuOTI4NiAxOS4zNTcyIDE1LjM1NzEgMTkuNzg1NyAxNS40Mjg2IDIwLjU3MTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={barsFilterOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BarsFilterOutlined';
}

export default RefIcon;
