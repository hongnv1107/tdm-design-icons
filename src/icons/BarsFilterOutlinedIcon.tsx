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
    <path d="M4 6.28573C4.04762 5.76192 4.33333 5.47621 4.85714 5.42859H19.1429C19.6667 5.47621 19.9524 5.76192 20 6.28573C19.9524 6.80954 19.6667 7.09526 19.1429 7.14287H4.85714C4.33333 7.09526 4.04762 6.80954 4 6.28573ZM6.28571 12C6.33333 11.4762 6.61905 11.1905 7.14286 11.1429H16.8571C17.381 11.1905 17.6667 11.4762 17.7143 12C17.6667 12.5238 17.381 12.8095 16.8571 12.8572H7.14286C6.61905 12.8095 6.33333 12.5238 6.28571 12ZM14.2857 17.7143C14.2381 18.2381 13.9524 18.5238 13.4286 18.5714H10.5714C10.0476 18.5238 9.76191 18.2381 9.71429 17.7143C9.76191 17.1905 10.0476 16.9048 10.5714 16.8572H13.4286C13.9524 16.9048 14.2381 17.1905 14.2857 17.7143Z"/>
  </svg>
);

const barsFilterOutlinedIconDefinition = svgToIconDefinition(
  barsFilterOutlinedSvg,
  'bars-filter-outlined'
);

/**![BarsFilterOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNCA2LjI4NTczQzQuMDQ3NjIgNS43NjE5MiA0LjMzMzMzIDUuNDc2MjEgNC44NTcxNCA1LjQyODU5SDE5LjE0MjlDMTkuNjY2NyA1LjQ3NjIxIDE5Ljk1MjQgNS43NjE5MiAyMCA2LjI4NTczQzE5Ljk1MjQgNi44MDk1NCAxOS42NjY3IDcuMDk1MjYgMTkuMTQyOSA3LjE0Mjg3SDQuODU3MTRDNC4zMzMzMyA3LjA5NTI2IDQuMDQ3NjIgNi44MDk1NCA0IDYuMjg1NzNaTTYuMjg1NzEgMTJDNi4zMzMzMyAxMS40NzYyIDYuNjE5MDUgMTEuMTkwNSA3LjE0Mjg2IDExLjE0MjlIMTYuODU3MUMxNy4zODEgMTEuMTkwNSAxNy42NjY3IDExLjQ3NjIgMTcuNzE0MyAxMkMxNy42NjY3IDEyLjUyMzggMTcuMzgxIDEyLjgwOTUgMTYuODU3MSAxMi44NTcySDcuMTQyODZDNi42MTkwNSAxMi44MDk1IDYuMzMzMzMgMTIuNTIzOCA2LjI4NTcxIDEyWk0xNC4yODU3IDE3LjcxNDNDMTQuMjM4MSAxOC4yMzgxIDEzLjk1MjQgMTguNTIzOCAxMy40Mjg2IDE4LjU3MTRIMTAuNTcxNEMxMC4wNDc2IDE4LjUyMzggOS43NjE5MSAxOC4yMzgxIDkuNzE0MjkgMTcuNzE0M0M5Ljc2MTkxIDE3LjE5MDUgMTAuMDQ3NiAxNi45MDQ4IDEwLjU3MTQgMTYuODU3MkgxMy40Mjg2QzEzLjk1MjQgMTYuOTA0OCAxNC4yMzgxIDE3LjE5MDUgMTQuMjg1NyAxNy43MTQzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={barsFilterOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BarsFilterOutlinedIcon';
}

export default RefIcon;
