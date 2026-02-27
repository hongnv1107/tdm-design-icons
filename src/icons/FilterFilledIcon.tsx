// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const filterFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.9999 4C20.3916 4 20.7476 4.22857 20.9101 4.58496C21.0725 4.94147 21.0118 5.36061 20.7548 5.65625L14.5995 12.7314V19C14.5995 19.3445 14.4227 19.6648 14.1308 19.8477C13.8387 20.0304 13.4729 20.0499 13.163 19.8994L9.96281 18.3438C9.61853 18.1764 9.40031 17.8271 9.40031 17.4443V12.7314L3.24504 5.65625C2.98803 5.36061 2.92736 4.94147 3.08977 4.58496C3.25228 4.22857 3.60821 4 3.99992 4H19.9999Z"/>
  </svg>
);

const filterFilledIconDefinition = svgToIconDefinition(
  filterFilledSvg,
  'filter-filled'
);

/**![FilterFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkuOTk5OSA0QzIwLjM5MTYgNCAyMC43NDc2IDQuMjI4NTcgMjAuOTEwMSA0LjU4NDk2QzIxLjA3MjUgNC45NDE0NyAyMS4wMTE4IDUuMzYwNjEgMjAuNzU0OCA1LjY1NjI1TDE0LjU5OTUgMTIuNzMxNFYxOUMxNC41OTk1IDE5LjM0NDUgMTQuNDIyNyAxOS42NjQ4IDE0LjEzMDggMTkuODQ3N0MxMy44Mzg3IDIwLjAzMDQgMTMuNDcyOSAyMC4wNDk5IDEzLjE2MyAxOS44OTk0TDkuOTYyODEgMTguMzQzOEM5LjYxODUzIDE4LjE3NjQgOS40MDAzMSAxNy44MjcxIDkuNDAwMzEgMTcuNDQ0M1YxMi43MzE0TDMuMjQ1MDQgNS42NTYyNUMyLjk4ODAzIDUuMzYwNjEgMi45MjczNiA0Ljk0MTQ3IDMuMDg5NzcgNC41ODQ5NkMzLjI1MjI4IDQuMjI4NTcgMy42MDgyMSA0IDMuOTk5OTIgNEgxOS45OTk5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={filterFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterFilledIcon';
}

export default RefIcon;
