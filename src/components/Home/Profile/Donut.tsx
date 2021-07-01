import { Icon16ChevronOutline, Icon16Fire } from "@vkontakte/icons"
import { Avatar, Card, Div, SimpleCell } from "@vkontakte/vkui"
import { SYMBOLS_RUB } from "engine/state"

const SubDonut = () => {
  return (
    <Div style={{ paddingTop: 0 }}>
      <Card
        mode="shadow"
        className="Subscribe-card"
      >
        <SimpleCell
          onClick={() => {
            console.log('id')
          }}
          before={
            <Avatar
              style={{ background: 'var(--destructive)' }}
              size={28}
              shadow={false}
            >
              <Icon16Fire fill="var(--white)" />
            </Avatar>
          }
          after={<Icon16ChevronOutline />}
          description={`Всего за 50 ${SYMBOLS_RUB} в месяц!`}
        >
          Стань Donut подписчиком!
        </SimpleCell>
      </Card>
    </Div>
  )
}

export default SubDonut