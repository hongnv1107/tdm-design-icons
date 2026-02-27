// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.95459 11.2089L12.4546 6.70895C12.771 6.39254 13.2632 6.28707 13.6851 6.46285C14.1069 6.63863 14.3882 7.06051 14.3882 7.51754L14.3882 16.5175C14.3882 16.9394 14.1069 17.3613 13.6851 17.5371C13.2632 17.7129 12.771 17.6074 12.4546 17.291L7.95459 12.791C7.49756 12.3691 7.49756 11.6308 7.95459 11.2089Z"/>
  </svg>
);

const arrowChannelLeftFilledIconDefinition = svgToIconDefinition(
  arrowChannelLeftFilledSvg,
  'arrow-channel-left-filled'
);

/**![ArrowChannelLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy45NTQ1OSAxMS4yMDg5TDEyLjQ1NDYgNi43MDg5NUMxMi43NzEgNi4zOTI1NCAxMy4yNjMyIDYuMjg3MDcgMTMuNjg1MSA2LjQ2Mjg1QzE0LjEwNjkgNi42Mzg2MyAxNC4zODgyIDcuMDYwNTEgMTQuMzg4MiA3LjUxNzU0TDE0LjM4ODIgMTYuNTE3NUMxNC4zODgyIDE2LjkzOTQgMTQuMTA2OSAxNy4zNjEzIDEzLjY4NTEgMTcuNTM3MUMxMy4yNjMyIDE3LjcxMjkgMTIuNzcxIDE3LjYwNzQgMTIuNDU0NiAxNy4yOTFMNy45NTQ1OSAxMi43OTFDNy40OTc1NiAxMi4zNjkxIDcuNDk3NTYgMTEuNjMwOCA3Ljk1NDU5IDExLjIwODlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelLeftFilledIcon';
}

export default RefIcon;
