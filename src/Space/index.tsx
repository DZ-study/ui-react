import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';

const Space: React.FC<Space.SpaceProps> = ({
  align = 'center',
  inline = false,
  itemStyle = {},
  justify = 'start',
  size = 'middle',
  direction = 'horizontal',
  wrap = true,
  children,
}) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('space');

  const classes = classNames(prefixCls, {
    [`${prefixCls}-inline`]: inline,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${direction}`]: direction,
  });

  return (
    <div
      className={classes}
      style={{
        ...(itemStyle as any),
        justifyContent: justify,
        alignContent: align,
      }}
    >
      {children.map((child: any, index: number) => (
        <div key={index} className={`${prefixCls}-item`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Space;
