'use client';

import * as React from 'react';
import clsx from 'clsx';

import type { IconDefinition } from '../utils';
import Context from './Context';
import type { IconBaseProps } from './Icon';
import ReactIcon from './IconBase';

export interface TdmIconProps extends IconBaseProps {
  /** Overrides the viewBox of the inner <svg>, e.g. `-4 -4 24 24` to pad a 16px icon onto a 24px grid */
  viewBox?: string;
}

export interface IconComponentProps extends TdmIconProps {
  icon: IconDefinition;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>(
  (props, ref) => {
    const {
      // affect outter <i>...</i>
      className,

      // affect inner <svg>...</svg>
      icon,
      viewBox,
      spin,
      rotate,

      tabIndex,
      onClick,

      ...restProps
    } = props;

    const { prefixCls = 'tdmicon', rootClassName } = React.useContext(Context);

    const classString = clsx(
      rootClassName,
      prefixCls,
      {
        [`${prefixCls}-${icon.name}`]: !!icon.name,
        [`${prefixCls}-spin`]: !!spin || icon.name === 'loading',
      },
      className
    );

    let iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
      iconTabIndex = -1;
    }

    const svgStyle: React.CSSProperties | undefined = rotate
      ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
      : undefined;

    return (
      <span
        role="img"
        aria-label={icon.name}
        {...restProps}
        ref={ref}
        tabIndex={iconTabIndex}
        onClick={onClick}
        className={classString}
      >
        <ReactIcon
          icon={icon}
          style={svgStyle}
          // generate() spreads root props over the svg attrs, so an undefined
          // viewBox would wipe out the original one
          {...(viewBox ? { viewBox } : null)}
        />
      </span>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Icon.displayName = 'TDMIcon';
}

export default Icon;
