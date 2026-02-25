// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moonFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.18 3.513v.037h.72c.266.038.493.228.53.493a.542.542 0 01-.264.644 6.646 6.646 0 00-3.41 5.797 6.654 6.654 0 006.668 6.67c.38 0 .758 0 1.137-.077.265-.038.53.076.644.303.114.266.076.53-.114.72a8.43 8.43 0 01-5.91 2.387c-4.661 0-8.45-3.789-8.45-8.487 0-4.66 3.789-8.487 8.45-8.487z"/>
  </svg>
);

const moonFilledIconDefinition = svgToIconDefinition(
  moonFilledSvg,
  'moon-filled'
);

/**![MoonFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjE4IDMuNTEzdi4wMzdoLjcyYy4yNjYuMDM4LjQ5My4yMjguNTMuNDkzYS41NDIuNTQyIDAgMDEtLjI2NC42NDQgNi42NDYgNi42NDYgMCAwMC0zLjQxIDUuNzk3IDYuNjU0IDYuNjU0IDAgMDA2LjY2OCA2LjY3Yy4zOCAwIC43NTggMCAxLjEzNy0uMDc3LjI2NS0uMDM4LjUzLjA3Ni42NDQuMzAzLjExNC4yNjYuMDc2LjUzLS4xMTQuNzJhOC40MyA4LjQzIDAgMDEtNS45MSAyLjM4N2MtNC42NjEgMC04LjQ1LTMuNzg5LTguNDUtOC40ODcgMC00LjY2IDMuNzg5LTguNDg3IDguNDUtOC40ODd6Ii8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moonFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoonFilledIcon';
}

export default RefIcon;
