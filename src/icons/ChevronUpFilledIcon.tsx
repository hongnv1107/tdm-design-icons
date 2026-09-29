// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path  d="M18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L12 9.41421L17.2929 14.7071C17.6834 15.0976 18.3166 15.0976 18.7071 14.7071Z"/>
  </svg>
);

const chevronUpFilledIconDefinition = svgToIconDefinition(
  chevronUpFilledSvg,
  'chevron-up-filled'
);

/**![ChevronUpFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjcwNzEgMTQuNzA3MUMxOS4wOTc2IDE0LjMxNjYgMTkuMDk3NiAxMy42ODM0IDE4LjcwNzEgMTMuMjkyOUwxMi43MDcxIDcuMjkyODlDMTIuMzE2NiA2LjkwMjM3IDExLjY4MzQgNi45MDIzNyAxMS4yOTI5IDcuMjkyODlMNS4yOTI4OSAxMy4yOTI5QzQuOTAyMzcgMTMuNjgzNCA0LjkwMjM3IDE0LjMxNjYgNS4yOTI4OSAxNC43MDcxQzUuNjgzNDIgMTUuMDk3NiA2LjMxNjU4IDE1LjA5NzYgNi43MDcxMSAxNC43MDcxTDEyIDkuNDE0MjFMMTcuMjkyOSAxNC43MDcxQzE3LjY4MzQgMTUuMDk3NiAxOC4zMTY2IDE1LjA5NzYgMTguNzA3MSAxNC43MDcxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpFilledIcon';
}

export default RefIcon;
