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
    <path d="M17.707 18.7071C18.0731 18.341 18.0957 17.762 17.7753 17.3692L17.707 17.293L12.707 12.293C12.3164 11.9025 11.6834 11.9025 11.2929 12.293L6.2929 17.293C5.90237 17.6836 5.90237 18.3166 6.2929 18.7071C6.68342 19.0976 7.31644 19.0976 7.70696 18.7071L11.9999 14.4141L16.2929 18.7071L16.3691 18.7755C16.7618 19.0958 17.3408 19.0732 17.707 18.7071ZM17.707 11.7071C18.0731 11.341 18.0957 10.762 17.7753 10.3692L17.707 10.293L12.707 5.29304C12.3164 4.90252 11.6834 4.90252 11.2929 5.29304L6.2929 10.293C5.90237 10.6836 5.90237 11.3166 6.2929 11.7071C6.68342 12.0976 7.31644 12.0976 7.70696 11.7071L11.9999 7.41414L16.2929 11.7071L16.3691 11.7755C16.7618 12.0958 17.3408 12.0732 17.707 11.7071Z"/>
  </svg>
);

const chevronUpFilledIconDefinition = svgToIconDefinition(
  chevronUpFilledSvg,
  'chevron-up-filled'
);

/**![ChevronUpFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcuNzA3IDE4LjcwNzFDMTguMDczMSAxOC4zNDEgMTguMDk1NyAxNy43NjIgMTcuNzc1MyAxNy4zNjkyTDE3LjcwNyAxNy4yOTNMMTIuNzA3IDEyLjI5M0MxMi4zMTY0IDExLjkwMjUgMTEuNjgzNCAxMS45MDI1IDExLjI5MjkgMTIuMjkzTDYuMjkyOSAxNy4yOTNDNS45MDIzNyAxNy42ODM2IDUuOTAyMzcgMTguMzE2NiA2LjI5MjkgMTguNzA3MUM2LjY4MzQyIDE5LjA5NzYgNy4zMTY0NCAxOS4wOTc2IDcuNzA2OTYgMTguNzA3MUwxMS45OTk5IDE0LjQxNDFMMTYuMjkyOSAxOC43MDcxTDE2LjM2OTEgMTguNzc1NUMxNi43NjE4IDE5LjA5NTggMTcuMzQwOCAxOS4wNzMyIDE3LjcwNyAxOC43MDcxWk0xNy43MDcgMTEuNzA3MUMxOC4wNzMxIDExLjM0MSAxOC4wOTU3IDEwLjc2MiAxNy43NzUzIDEwLjM2OTJMMTcuNzA3IDEwLjI5M0wxMi43MDcgNS4yOTMwNEMxMi4zMTY0IDQuOTAyNTIgMTEuNjgzNCA0LjkwMjUyIDExLjI5MjkgNS4yOTMwNEw2LjI5MjkgMTAuMjkzQzUuOTAyMzcgMTAuNjgzNiA1LjkwMjM3IDExLjMxNjYgNi4yOTI5IDExLjcwNzFDNi42ODM0MiAxMi4wOTc2IDcuMzE2NDQgMTIuMDk3NiA3LjcwNjk2IDExLjcwNzFMMTEuOTk5OSA3LjQxNDE0TDE2LjI5MjkgMTEuNzA3MUwxNi4zNjkxIDExLjc3NTVDMTYuNzYxOCAxMi4wOTU4IDE3LjM0MDggMTIuMDczMiAxNy43MDcgMTEuNzA3MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpFilledIcon';
}

export default RefIcon;
