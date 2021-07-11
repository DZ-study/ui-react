import React, { useContext, forwardRef, memo } from 'react';
import classNames from 'classnames';
import Wave from '../_utils/wave';
import { ConfigContext } from '../config-provider';

const InternalButton: React.ForwardRefRenderFunction<
  unknown,
  Button.BaseButtonProps
> = ({ size, type, children, disabled, href, onClick, ...restProps }, ref) => {
  console.log('Button...');

  const buttonRef = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn');

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
    disabled: disabled,
  });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onClick) {
      onClick(e);
    }
  };

  let ButtonNode = null;

  if (type === 'link' && href) {
    ButtonNode = (
      <a className={classes} href={href} {...restProps} ref={buttonRef}>
        {children}
      </a>
    );
  } else {
    ButtonNode = (
      <button
        className={classes}
        {...restProps}
        onClick={handleClick}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }
  return <Wave>{ButtonNode}</Wave>;
};

const Button = forwardRef<unknown, Button.BaseButtonProps>(InternalButton);

Button.defaultProps = {
  size: 'middle',
  type: 'default',
  disabled: false,
};

export default memo(Button);
