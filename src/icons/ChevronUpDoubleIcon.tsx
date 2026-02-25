// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronUpDoubleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.7069 18.7071C18.073 18.341 18.0956 17.762 17.7753 17.3692L17.7069 17.293L12.7069 12.293C12.3164 11.9025 11.6834 11.9025 11.2928 12.293L6.29284 17.293C5.90231 17.6836 5.90231 18.3166 6.29284 18.7071C6.68336 19.0976 7.31638 19.0976 7.7069 18.7071L11.9999 14.4141L16.2928 18.7071L16.369 18.7755C16.7618 19.0958 17.3408 19.0732 17.7069 18.7071ZM17.7069 11.7071C18.073 11.341 18.0956 10.762 17.7753 10.3692L17.7069 10.293L12.7069 5.29304C12.3164 4.90252 11.6834 4.90252 11.2928 5.29304L6.29284 10.293C5.90231 10.6836 5.90231 11.3166 6.29284 11.7071C6.68336 12.0976 7.31638 12.0976 7.7069 11.7071L11.9999 7.41414L16.2928 11.7071L16.369 11.7755C16.7618 12.0958 17.3408 12.0732 17.7069 11.7071Z" />
  </svg>
);

const chevronUpDoubleIconDefinition = svgToIconDefinition(
  chevronUpDoubleSvg,
  'chevron-up-double'
);

/**![ChevronUpDoubleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNzA2OSAxOC43MDcxQzE4LjA3MyAxOC4zNDEgMTguMDk1NiAxNy43NjIgMTcuNzc1MyAxNy4zNjkyTDE3LjcwNjkgMTcuMjkzTDEyLjcwNjkgMTIuMjkzQzEyLjMxNjQgMTEuOTAyNSAxMS42ODM0IDExLjkwMjUgMTEuMjkyOCAxMi4yOTNMNi4yOTI4NCAxNy4yOTNDNS45MDIzMSAxNy42ODM2IDUuOTAyMzEgMTguMzE2NiA2LjI5Mjg0IDE4LjcwNzFDNi42ODMzNiAxOS4wOTc2IDcuMzE2MzggMTkuMDk3NiA3LjcwNjkgMTguNzA3MUwxMS45OTk5IDE0LjQxNDFMMTYuMjkyOCAxOC43MDcxTDE2LjM2OSAxOC43NzU1QzE2Ljc2MTggMTkuMDk1OCAxNy4zNDA4IDE5LjA3MzIgMTcuNzA2OSAxOC43MDcxWk0xNy43MDY5IDExLjcwNzFDMTguMDczIDExLjM0MSAxOC4wOTU2IDEwLjc2MiAxNy43NzUzIDEwLjM2OTJMMTcuNzA2OSAxMC4yOTNMMTIuNzA2OSA1LjI5MzA0QzEyLjMxNjQgNC45MDI1MiAxMS42ODM0IDQuOTAyNTIgMTEuMjkyOCA1LjI5MzA0TDYuMjkyODQgMTAuMjkzQzUuOTAyMzEgMTAuNjgzNiA1LjkwMjMxIDExLjMxNjYgNi4yOTI4NCAxMS43MDcxQzYuNjgzMzYgMTIuMDk3NiA3LjMxNjM4IDEyLjA5NzYgNy43MDY5IDExLjcwNzFMMTEuOTk5OSA3LjQxNDE0TDE2LjI5MjggMTEuNzA3MUwxNi4zNjkgMTEuNzc1NUMxNi43NjE4IDEyLjA5NTggMTcuMzQwOCAxMi4wNzMyIDE3LjcwNjkgMTEuNzA3MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpDoubleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpDoubleIcon';
}

export default RefIcon;
