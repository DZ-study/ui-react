declare namespace Button {
  interface BaseButtonProps {
    disabled?: boolean;
    icon?: React.ReactNode;
    size?: 'large' | 'middle' | 'small';
    type?: 'primary' | 'ghost' | 'link' | 'default';
    loading?: boolean;
    prefixCls?: string;
    className?: string;
    children: string | React.ReactNode;
    href?: string;
    onClick: React.MouseEventHandler<HTMLElement>;
  }

  enum ButtonSize {
    Large = 'lg',
    Middle = 'md',
    Small = 'sm',
  }

  enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
  }
}
