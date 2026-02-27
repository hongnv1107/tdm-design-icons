// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0C5.372 0 0 5.373 0 12s5.372 12 12 12Z"/><path fill="#338AF3" d="M7.305 7.825h15.95C21.559 3.255 17.16 0 12 0a11.96 11.96 0 0 0-8.485 3.515l3.79 4.311Zm-.001 8.347h15.95C21.558 20.742 17.16 24 12 24a11.961 11.961 0 0 1-8.485-3.515l3.79-4.312Z"/><path fill="#000" d="M3.514 3.514c-4.686 4.687-4.686 12.285 0 16.97L12 12 3.513 3.514Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const bSCircleIconDefinition = svgToIconDefinition(
  bSCircleSvg,
  'bscircle'
);

/**![BSCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBDNS4zNzIgMCAwIDUuMzczIDAgMTJzNS4zNzIgMTIgMTIgMTJaIi8+PHBhdGggZmlsbD0iIzMzOEFGMyIgZD0iTTcuMzA1IDcuODI1aDE1Ljk1QzIxLjU1OSAzLjI1NSAxNy4xNiAwIDEyIDBhMTEuOTYgMTEuOTYgMCAwIDAtOC40ODUgMy41MTVsMy43OSA0LjMxMVptLS4wMDEgOC4zNDdoMTUuOTVDMjEuNTU4IDIwLjc0MiAxNy4xNiAyNCAxMiAyNGExMS45NjEgMTEuOTYxIDAgMCAxLTguNDg1LTMuNTE1bDMuNzktNC4zMTJaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTMuNTE0IDMuNTE0Yy00LjY4NiA0LjY4Ny00LjY4NiAxMi4yODUgMCAxNi45N0wxMiAxMiAzLjUxMyAzLjUxNFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BSCircleIcon';
}

export default RefIcon;
