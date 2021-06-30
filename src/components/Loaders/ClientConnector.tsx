import {
  Card,
  Header,
  Spinner,
  Title,
  Separator
} from '@vkontakte/vkui'

const CustomLoader = () => {
  return (
    <div style={{ background: 'rgba(0,0,0,.1)', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card className='CustomLoader' style={{ overflow: 'hidden', width: 300 }} mode="shadow" >
        <Header mode="secondary">Подключение</Header>
        <Separator/>
        <Spinner size="medium" style={{ marginTop: 18, marginBottom: 12, color: 'var(--text_secondary)' }} />
        <Title weight="regular" level="3" style={{ color: 'var(--text_secondary)', marginBottom: 24, textAlign: 'center', fontSize: 14 }} >Ожидаем ответа от сервера</Title>
      </Card>
    </div>
  )
}

(CustomLoader as any).type = "CustomLoader"

export default CustomLoader