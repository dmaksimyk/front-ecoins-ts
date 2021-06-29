import { Button, Div } from "@vkontakte/vkui";

const MenuButton = () => {

  return (
    <Div style={{ padding: '0 0 12px 0' }}>
      <Button
        mode="secondary"
        stretched
        onClick={() => console.log('settings')}
      >Настройки</Button>
    </Div>
  )
}

export default MenuButton;