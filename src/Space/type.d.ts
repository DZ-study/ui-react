declare namespace Space {
  interface SpaceProps {
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    inline?: boolean;
    itemStyle?: string | object;
    justify?: 'start' | 'end';
    size?: 'small' | 'middle' | 'large' | number;
    direction?: 'vertical' | 'horizontal';
    wrap?: boolean;
    children: any;
  }
}
