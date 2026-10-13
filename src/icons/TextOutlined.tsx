// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const textOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.57143 2.57143V5.14286C2.5 5.92857 2.07143 6.35714 1.28571 6.42857C0.5 6.35714 0.0714286 5.92857 0 5.14286V2.14286C0 1.53571 0.214286 1.03571 0.642857 0.642857C1.03571 0.214286 1.53571 0 2.14286 0H21.8571C22.4643 0 22.9643 0.214286 23.3571 0.642857C23.7857 1.03571 24 1.53571 24 2.14286V5.14286C23.9286 5.92857 23.5 6.35714 22.7143 6.42857C21.9286 6.35714 21.5 5.92857 21.4286 5.14286V2.57143H13.2857V21.4286H15.8571C16.6429 21.5 17.0714 21.9286 17.1429 22.7143C17.0714 23.5 16.6429 23.9286 15.8571 24H8.14286C7.35714 23.9286 6.92857 23.5 6.85714 22.7143C6.92857 21.9286 7.35714 21.5 8.14286 21.4286H10.7143V2.57143H2.57143Z"/>
  </svg>
);

const textOutlinedIconDefinition = svgToIconDefinition(
  textOutlinedSvg,
  'text-outlined'
);

/**![TextOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi41NzE0MyAyLjU3MTQzVjUuMTQyODZDMi41IDUuOTI4NTcgMi4wNzE0MyA2LjM1NzE0IDEuMjg1NzEgNi40Mjg1N0MwLjUgNi4zNTcxNCAwLjA3MTQyODYgNS45Mjg1NyAwIDUuMTQyODZWMi4xNDI4NkMwIDEuNTM1NzEgMC4yMTQyODYgMS4wMzU3MSAwLjY0Mjg1NyAwLjY0Mjg1N0MxLjAzNTcxIDAuMjE0Mjg2IDEuNTM1NzEgMCAyLjE0Mjg2IDBIMjEuODU3MUMyMi40NjQzIDAgMjIuOTY0MyAwLjIxNDI4NiAyMy4zNTcxIDAuNjQyODU3QzIzLjc4NTcgMS4wMzU3MSAyNCAxLjUzNTcxIDI0IDIuMTQyODZWNS4xNDI4NkMyMy45Mjg2IDUuOTI4NTcgMjMuNSA2LjM1NzE0IDIyLjcxNDMgNi40Mjg1N0MyMS45Mjg2IDYuMzU3MTQgMjEuNSA1LjkyODU3IDIxLjQyODYgNS4xNDI4NlYyLjU3MTQzSDEzLjI4NTdWMjEuNDI4NkgxNS44NTcxQzE2LjY0MjkgMjEuNSAxNy4wNzE0IDIxLjkyODYgMTcuMTQyOSAyMi43MTQzQzE3LjA3MTQgMjMuNSAxNi42NDI5IDIzLjkyODYgMTUuODU3MSAyNEg4LjE0Mjg2QzcuMzU3MTQgMjMuOTI4NiA2LjkyODU3IDIzLjUgNi44NTcxNCAyMi43MTQzQzYuOTI4NTcgMjEuOTI4NiA3LjM1NzE0IDIxLjUgOC4xNDI4NiAyMS40Mjg2SDEwLjcxNDNWMi41NzE0M0gyLjU3MTQzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={textOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TextOutlined';
}

export default RefIcon;
