const defaultStyle = {
  borderRadius: 10,
  objectFit: "cover",
};

const Avatar: React.FC<{
  img: any;
  size: 56 | 48 | 42 | 32 | 24;
  styling?: object;
}> = ({ img, size, styling = defaultStyle }) => {
  return (
    <img
      src={img}
      style={{ ...styling, ...{ width: size, height: size } }}
      alt=""
    />
  );
};

export default Avatar;
