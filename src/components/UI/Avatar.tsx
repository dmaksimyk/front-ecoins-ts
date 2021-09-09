/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

const defaultStyle = {
  borderRadius: 10,
  objectFit: 'cover',
};

const Avatar: React.FC<{
  img: any;
  size: 56 | 48 | 42 | 32 | 24;
  styling?: object;
}> = ({ img, size, styling = defaultStyle }) => (
  <img
    src={img}
    style={{ ...styling, ...{ width: size, height: size } }}
    alt=""
  />
);

export default Avatar;
