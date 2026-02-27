// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L9.41421 12L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289Z"/>
  </svg>
);

const chevronLeftFilledIconDefinition = svgToIconDefinition(
  chevronLeftFilledSvg,
  'chevron-left-filled'
);

/**![ChevronLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjcwNzEgNS4yOTI4OUMxNC4zMTY2IDQuOTAyMzcgMTMuNjgzNCA0LjkwMjM3IDEzLjI5MjkgNS4yOTI4OUw3LjI5Mjg5IDExLjI5MjlDNi45MDIzNyAxMS42ODM0IDYuOTAyMzcgMTIuMzE2NiA3LjI5Mjg5IDEyLjcwNzFMMTMuMjkyOSAxOC43MDcxQzEzLjY4MzQgMTkuMDk3NiAxNC4zMTY2IDE5LjA5NzYgMTQuNzA3MSAxOC43MDcxQzE1LjA5NzYgMTguMzE2NiAxNS4wOTc2IDE3LjY4MzQgMTQuNzA3MSAxNy4yOTI5TDkuNDE0MjEgMTJMMTQuNzA3MSA2LjcwNzExQzE1LjA5NzYgNi4zMTY1OCAxNS4wOTc2IDUuNjgzNDIgMTQuNzA3MSA1LjI5Mjg5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronLeftFilledIcon';
}

export default RefIcon;
