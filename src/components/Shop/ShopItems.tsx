import { Card, Separator } from "@vkontakte/vkui";

import { Text, Button } from "@vkontakte/vkui";

import { Avatar } from "components/UI";

const ShopItems: React.FC<{
  id: number | undefined;
  type: string | undefined;
  disable: boolean;
  img: string;
  title: string;
  requirements: string;
  status: string;
}> = ({
  id = undefined,
  type = undefined,
  disable,
  img,
  title,
  requirements,
  status,
}) => {
  return (
    <Card className="ShopItems" style={{ margin: 12 }} mode="outline">
      <div style={{ display: "flex", alignItems: "center", padding: 6 }}>
        <Avatar img={img} size={56} />
        <div style={{ marginLeft: 12 }}>
          <Text weight="regular">{title}</Text>
          <Text weight="regular" style={{ color: "var(--text_subhead)" }}>
            {status}
          </Text>
          <Text weight="regular" style={{ color: "var(--text_subhead)" }}>
            {requirements}
          </Text>
        </div>
      </div>
      <Separator />
      <div style={{ padding: "8px" }}>
        <Button
          disabled={disable}
          mode="outline"
          onClick={() => console.log(`ShopItem:`, { id: id, type: type })}
          stretched
        >
          Купить
        </Button>
      </div>
    </Card>
  );
};

export default ShopItems;
