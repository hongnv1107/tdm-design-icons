// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const nFCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M17.217 1.19A11.952 11.952 0 0 0 12 0c-1.87 0-3.64.428-5.218 1.19L5.74 12l1.043 10.809A11.951 11.951 0 0 0 12 23.999c1.87 0 3.64-.427 5.217-1.19l1.044-10.81L17.216 1.19Z"/><path fill="#6DA544" d="M6.782 1.19A12 12 0 0 0 0 12a12 12 0 0 0 6.782 10.81V1.19Zm10.435 0v21.62A12 12 0 0 0 24 12c0-4.757-2.769-8.869-6.783-10.81ZM15.13 15.652 12 5.739l-3.13 9.913h2.348v2.608h1.565v-2.608h2.348Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const nFCircleIconDefinition = svgToIconDefinition(
  nFCircleSvg,
  'nfcircle'
);

/**![NFCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xNy4yMTcgMS4xOUExMS45NTIgMTEuOTUyIDAgMCAwIDEyIDBjLTEuODcgMC0zLjY0LjQyOC01LjIxOCAxLjE5TDUuNzQgMTJsMS4wNDMgMTAuODA5QTExLjk1MSAxMS45NTEgMCAwIDAgMTIgMjMuOTk5YzEuODcgMCAzLjY0LS40MjcgNS4yMTctMS4xOWwxLjA0NC0xMC44MUwxNy4yMTYgMS4xOVoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNNi43ODIgMS4xOUExMiAxMiAwIDAgMCAwIDEyYTEyIDEyIDAgMCAwIDYuNzgyIDEwLjgxVjEuMTlabTEwLjQzNSAwdjIxLjYyQTEyIDEyIDAgMCAwIDI0IDEyYzAtNC43NTctMi43NjktOC44NjktNi43ODMtMTAuODFaTTE1LjEzIDE1LjY1MiAxMiA1LjczOWwtMy4xMyA5LjkxM2gyLjM0OHYyLjYwOGgxLjU2NXYtMi42MDhoMi4zNDhaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={nFCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NFCircleIcon';
}

export default RefIcon;
