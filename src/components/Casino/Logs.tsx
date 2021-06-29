import { Header, Title, Card } from '@vkontakte/vkui'
import { ReactNode } from 'react'

type Props = {
  type: "error" | "success";
  header: string;
  status?: string;
  width?: number;
  img: ReactNode;
}

const Logs = ({ type, header, status = '', width, img }: Props) => {
  return (
    <Card style={{ width: width && width >= 1 ? `${width}vw` : 'inherit' }}>
      <div className='Logs'>
        <div className='Logs__img' style={{ color: type === "error" ? '#FF4B24' : '#4FFF24' }}> {img} </div>
        <div className='Logs__titles'> 
          <Header className='Logs__header' style={{ maxWidth: "80vw" }}>{header}</Header>
          <Title className='Logs__title' style={{ maxWidth: "80vw" }} weight="regular" level="2" >{status}</Title> 
        </div>
      </div>
    </Card>
  )
}

export default Logs