import React from 'react';
// import defaultRenderPrefixCls from './renderEmpty'

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customerPrefixCls?: string) => string;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customerPrefixCls?: string,
) => {
  if (customerPrefixCls) return customerPrefixCls;

  return suffixCls ? `ui-${suffixCls}` : 'ui';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
  // renderEmpty: defaultRenderPrefixCls
});
