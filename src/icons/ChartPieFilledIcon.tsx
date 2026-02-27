// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chartPieFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.0514 10.9699C20.6053 10.9699 21.0608 10.5191 20.9918 9.96954C20.9026 9.25933 20.7186 8.56273 20.4436 7.89865C20.0404 6.92494 19.4494 6.04021 18.7043 5.29496C17.9593 4.54972 17.0748 3.95856 16.1013 3.55524C15.4375 3.2802 14.7411 3.09618 14.0312 3.00695C13.4816 2.93787 13.0308 3.39337 13.0308 3.94729V9.96694C13.0308 10.5209 13.4799 10.9699 14.0338 10.9699H20.0514Z"/><path d="M11.0249 21C15.1173 21 18.4941 17.9362 18.9868 13.9773C19.0552 13.4276 18.5996 12.9763 18.0457 12.9763H12.0279C11.474 12.9763 11.0249 12.5273 11.0249 11.9733V5.95557C11.0249 5.40165 10.5736 4.94603 10.0239 5.01444C6.06498 5.50711 3.00122 8.88392 3.00122 12.9763C3.00122 17.4077 6.59355 21 11.0249 21Z"/>
  </svg>
);

const chartPieFilledIconDefinition = svgToIconDefinition(
  chartPieFilledSvg,
  'chart-pie-filled'
);

/**![ChartPieFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAuMDUxNCAxMC45Njk5QzIwLjYwNTMgMTAuOTY5OSAyMS4wNjA4IDEwLjUxOTEgMjAuOTkxOCA5Ljk2OTU0QzIwLjkwMjYgOS4yNTkzMyAyMC43MTg2IDguNTYyNzMgMjAuNDQzNiA3Ljg5ODY1QzIwLjA0MDQgNi45MjQ5NCAxOS40NDk0IDYuMDQwMjEgMTguNzA0MyA1LjI5NDk2QzE3Ljk1OTMgNC41NDk3MiAxNy4wNzQ4IDMuOTU4NTYgMTYuMTAxMyAzLjU1NTI0QzE1LjQzNzUgMy4yODAyIDE0Ljc0MTEgMy4wOTYxOCAxNC4wMzEyIDMuMDA2OTVDMTMuNDgxNiAyLjkzNzg3IDEzLjAzMDggMy4zOTMzNyAxMy4wMzA4IDMuOTQ3MjlWOS45NjY5NEMxMy4wMzA4IDEwLjUyMDkgMTMuNDc5OSAxMC45Njk5IDE0LjAzMzggMTAuOTY5OUgyMC4wNTE0WiIvPjxwYXRoIGQ9Ik0xMS4wMjQ5IDIxQzE1LjExNzMgMjEgMTguNDk0MSAxNy45MzYyIDE4Ljk4NjggMTMuOTc3M0MxOS4wNTUyIDEzLjQyNzYgMTguNTk5NiAxMi45NzYzIDE4LjA0NTcgMTIuOTc2M0gxMi4wMjc5QzExLjQ3NCAxMi45NzYzIDExLjAyNDkgMTIuNTI3MyAxMS4wMjQ5IDExLjk3MzNWNS45NTU1N0MxMS4wMjQ5IDUuNDAxNjUgMTAuNTczNiA0Ljk0NjAzIDEwLjAyMzkgNS4wMTQ0NEM2LjA2NDk4IDUuNTA3MTEgMy4wMDEyMiA4Ljg4MzkyIDMuMDAxMjIgMTIuOTc2M0MzLjAwMTIyIDE3LjQwNzcgNi41OTM1NSAyMSAxMS4wMjQ5IDIxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chartPieFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChartPieFilledIcon';
}

export default RefIcon;
