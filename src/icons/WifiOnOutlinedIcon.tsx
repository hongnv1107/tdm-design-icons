// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const wifiOnOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.25 9.813c-.375.27-.73.25-1.063-.063-.27-.375-.25-.73.063-1.063A14.718 14.718 0 016.687 5.97C8.354 5.323 10.125 5 12 5c1.875 0 3.646.323 5.313.969a14.718 14.718 0 014.437 2.718c.313.334.333.688.063 1.063-.334.313-.688.333-1.063.063a13.054 13.054 0 00-4-2.438C15.27 6.792 13.687 6.5 12 6.5c-1.688 0-3.27.292-4.75.875a13.053 13.053 0 00-4 2.438zM12 12c-2.063.042-3.813.719-5.25 2.031-.354.292-.708.281-1.063-.031-.27-.375-.25-.73.063-1.063a8.979 8.979 0 012.844-1.78A8.86 8.86 0 0112 10.5a8.86 8.86 0 013.406.656 8.978 8.978 0 012.844 1.781c.313.334.333.688.063 1.063-.355.313-.709.323-1.063.031C15.812 12.72 14.062 12.041 12 12zm1.75 5.25c-.02.667-.313 1.167-.875 1.5-.583.333-1.167.333-1.75 0-.563-.333-.854-.833-.875-1.5.02-.667.313-1.167.875-1.5.583-.333 1.167-.333 1.75 0 .563.333.854.833.875 1.5z"/>
  </svg>
);

const wifiOnOutlinedIconDefinition = svgToIconDefinition(
  wifiOnOutlinedSvg,
  'wifi-on-outlined'
);

/**![WifiOnOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjUgOS44MTNjLS4zNzUuMjctLjczLjI1LTEuMDYzLS4wNjMtLjI3LS4zNzUtLjI1LS43My4wNjMtMS4wNjNBMTQuNzE4IDE0LjcxOCAwIDAxNi42ODcgNS45N0M4LjM1NCA1LjMyMyAxMC4xMjUgNSAxMiA1YzEuODc1IDAgMy42NDYuMzIzIDUuMzEzLjk2OWExNC43MTggMTQuNzE4IDAgMDE0LjQzNyAyLjcxOGMuMzEzLjMzNC4zMzMuNjg4LjA2MyAxLjA2My0uMzM0LjMxMy0uNjg4LjMzMy0xLjA2My4wNjNhMTMuMDU0IDEzLjA1NCAwIDAwLTQtMi40MzhDMTUuMjcgNi43OTIgMTMuNjg3IDYuNSAxMiA2LjVjLTEuNjg4IDAtMy4yNy4yOTItNC43NS44NzVhMTMuMDUzIDEzLjA1MyAwIDAwLTQgMi40Mzh6TTEyIDEyYy0yLjA2My4wNDItMy44MTMuNzE5LTUuMjUgMi4wMzEtLjM1NC4yOTItLjcwOC4yODEtMS4wNjMtLjAzMS0uMjctLjM3NS0uMjUtLjczLjA2My0xLjA2M2E4Ljk3OSA4Ljk3OSAwIDAxMi44NDQtMS43OEE4Ljg2IDguODYgMCAwMTEyIDEwLjVhOC44NiA4Ljg2IDAgMDEzLjQwNi42NTYgOC45NzggOC45NzggMCAwMTIuODQ0IDEuNzgxYy4zMTMuMzM0LjMzMy42ODguMDYzIDEuMDYzLS4zNTUuMzEzLS43MDkuMzIzLTEuMDYzLjAzMUMxNS44MTIgMTIuNzIgMTQuMDYyIDEyLjA0MSAxMiAxMnptMS43NSA1LjI1Yy0uMDIuNjY3LS4zMTMgMS4xNjctLjg3NSAxLjUtLjU4My4zMzMtMS4xNjcuMzMzLTEuNzUgMC0uNTYzLS4zMzMtLjg1NC0uODMzLS44NzUtMS41LjAyLS42NjcuMzEzLTEuMTY3Ljg3NS0xLjUuNTgzLS4zMzMgMS4xNjctLjMzMyAxLjc1IDAgLjU2My4zMzMuODU0LjgzMy44NzUgMS41eiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={wifiOnOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WifiOnOutlinedIcon';
}

export default RefIcon;
