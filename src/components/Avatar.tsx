type TProps = {
  img: any;
  size: 56 | 48 | 42 | 32 | 24;
  styling?: object;
}

const defaultStyle = {
  borderRadius: 10,
  objectFit: 'cover'
}

const Avatar = ({img, size, styling = defaultStyle }: TProps) => {
  return (
    <img
      src={img}
      style={{...styling , ...{width: size, height: size}}}
      alt=''
    />
  )
}

export default Avatar;