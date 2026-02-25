// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playReadyColorSvg = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.86364 8.86364H16.25V16.25H8.86364V8.86364Z" fill="#FEBA08" /> <path d="M0 8.86364H7.38636V16.25H0V8.86364Z" fill="#05A6F0" /> <path d="M8.86364 0H16.25V7.38636H8.86364V0Z" fill="#80BC06" /> <path d="M0 0H7.38636V7.38636H0V0Z" fill="#F25325" />
  </svg>
);

const playReadyColorIconDefinition = svgToIconDefinition(
  playReadyColorSvg,
  'play-ready-color'
);

/**![PlayReadyColorIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC44NjM2NCA4Ljg2MzY0SDE2LjI1VjE2LjI1SDguODYzNjRWOC44NjM2NFoiIGZpbGw9IiNGRUJBMDgiLz48cGF0aCBkPSJNMCA4Ljg2MzY0SDcuMzg2MzZWMTYuMjVIMFY4Ljg2MzY0WiIgZmlsbD0iIzA1QTZGMCIvPjxwYXRoIGQ9Ik04Ljg2MzY0IDBIMTYuMjVWNy4zODYzNkg4Ljg2MzY0VjBaIiBmaWxsPSIjODBCQzA2Ii8+PHBhdGggZD0iTTAgMEg3LjM4NjM2VjcuMzg2MzZIMFYwWiIgZmlsbD0iI0YyNTMyNSIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playReadyColorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayReadyColorIcon';
}

export default RefIcon;
