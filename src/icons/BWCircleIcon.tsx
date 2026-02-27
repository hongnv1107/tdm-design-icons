// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bWCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M.567 8.348A11.99 11.99 0 0 0 0 12c0 1.274.2 2.5.567 3.652l11.434.522 11.433-.522C23.8 14.5 24 13.274 24 12s-.199-2.5-.566-3.652L12 7.826.567 8.348Z"/><path fill="#000" d="M24 12c0-.712-.062-1.409-.18-2.086H.181a12.057 12.057 0 0 0 0 4.174h23.637c.12-.678.182-1.376.182-2.088Z"/><path fill="#338AF3" d="M12 24c5.354 0 9.889-3.506 11.434-8.348H.567C2.112 20.494 6.647 24 12 24Zm0-24C6.647 0 2.112 3.505.567 8.347h22.867C21.889 3.506 17.354-.001 12-.001Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const bWCircleIconDefinition = svgToIconDefinition(
  bWCircleSvg,
  'bwcircle'
);

/**![BWCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0uNTY3IDguMzQ4QTExLjk5IDExLjk5IDAgMCAwIDAgMTJjMCAxLjI3NC4yIDIuNS41NjcgMy42NTJsMTEuNDM0LjUyMiAxMS40MzMtLjUyMkMyMy44IDE0LjUgMjQgMTMuMjc0IDI0IDEycy0uMTk5LTIuNS0uNTY2LTMuNjUyTDEyIDcuODI2LjU2NyA4LjM0OFoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjQgMTJjMC0uNzEyLS4wNjItMS40MDktLjE4LTIuMDg2SC4xODFhMTIuMDU3IDEyLjA1NyAwIDAgMCAwIDQuMTc0aDIzLjYzN2MuMTItLjY3OC4xODItMS4zNzYuMTgyLTIuMDg4WiIvPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMiAyNGM1LjM1NCAwIDkuODg5LTMuNTA2IDExLjQzNC04LjM0OEguNTY3QzIuMTEyIDIwLjQ5NCA2LjY0NyAyNCAxMiAyNFptMC0yNEM2LjY0NyAwIDIuMTEyIDMuNTA1LjU2NyA4LjM0N2gyMi44NjdDMjEuODg5IDMuNTA2IDE3LjM1NC0uMDAxIDEyLS4wMDFaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bWCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BWCircleIcon';
}

export default RefIcon;
