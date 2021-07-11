import React, { useContext } from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ConfigContext } from '../config-provider';

// 一次性加载fontAwesomeIcon所有图标
library.add(fas);

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = ({ className, theme, ...restProps }) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('icon');

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${theme}`]: theme,
  });
  return (
    <>
      <FontAwesomeIcon className={classes} {...restProps} />
    </>
  );
};

export default Icon;
