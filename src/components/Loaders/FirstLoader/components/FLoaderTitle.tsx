import { Title } from '@vkontakte/vkui'

type TProps = {
  children: string | number;
  weight?: 'regular' | 'heavy' | 'bold' | 'semibold' | 'medium';
  level?: '1' | '2' | '3';
  style?: object;
  className?: string;
}

const FLoaderTitle = ({className, children, weight = "regular", level = "2", style = {}}: TProps) => {
  return (
    <Title
      className={className}
      weight={weight}
      level={level}
      style={style}
    >{children}</Title>
  )
}

export default FLoaderTitle