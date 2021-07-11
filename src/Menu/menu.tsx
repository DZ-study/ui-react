import React, {
  FC,
  useState,
  createContext,
  CSSProperties,
  useContext,
} from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';
import { ConfigContext } from '../config-provider';

type MenuDirection = 'horizontal' | 'vertical';

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  direction?: MenuDirection;
  style?: CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  direction?: MenuDirection;
  defaultOpenSubMenus?: string[];
  mode?: string;
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    direction,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu');

  const classes = classNames(prefixCls, className, {
    'menu-vertical': direction === 'vertical',
    'menu-horizontal': direction !== 'vertical',
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    direction,
    defaultOpenSubMenus,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component',
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: '0',
  direction: 'horizontal',
  defaultOpenSubMenus: [],
};

export default Menu;
