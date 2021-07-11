import React, { CSSProperties, ReactNode } from 'react';
import NoData from './NoData';

type EmptyProps = {
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: CSSProperties;
};

const Empty: React.FC<EmptyProps> = ({
  description = <span>no data</span>,
  image = <NoData />,
  imageStyle = {},
}) => {
  let imageNode: ReactNode = null;

  if (typeof image === 'string') {
    imageNode = <img alt="null" src={image} />;
  } else {
    imageNode = image;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={imageStyle}>{imageNode}</div>
      {description}
    </div>
  );
};

export default Empty;
