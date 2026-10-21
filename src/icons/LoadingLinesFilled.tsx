// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const loadingLinesFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C7.58579 2.5 7.25 2.16421 7.25 1.75C7.25 1.33579 7.58579 1 8 1C11.866 1 15 4.13401 15 8C15 8.41421 14.6642 8.75 14.25 8.75C13.8358 8.75 13.5 8.41421 13.5 8Z"/>
  </svg>
);

const loadingLinesFilledIconDefinition = svgToIconDefinition(
  loadingLinesFilledSvg,
  'loading-lines-filled'
);

/**![LoadingLinesFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSA4QzEzLjUgNC45NjI0MyAxMS4wMzc2IDIuNSA4IDIuNUM3LjU4NTc5IDIuNSA3LjI1IDIuMTY0MjEgNy4yNSAxLjc1QzcuMjUgMS4zMzU3OSA3LjU4NTc5IDEgOCAxQzExLjg2NiAxIDE1IDQuMTM0MDEgMTUgOEMxNSA4LjQxNDIxIDE0LjY2NDIgOC43NSAxNC4yNSA4Ljc1QzEzLjgzNTggOC43NSAxMy41IDguNDE0MjEgMTMuNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={loadingLinesFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LoadingLinesFilled';
}

export default RefIcon;
