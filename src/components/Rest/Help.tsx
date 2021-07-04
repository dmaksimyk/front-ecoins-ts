import { Banner } from "@vkontakte/vkui";

const Help = ({
  header = "Подсказка",
  text,
  text2,
  aside = undefined,
  style = undefined,
}: {
  header?: string;
  text: string;
  text2?: string;
  aside?: undefined | "expand" | "dismiss";
  style?: any;
}) => {
  return (
    <Banner
      style={style}
      header={header}
      subheader={<>
      {text}
      <br/>{text2}
      </>}
      asideMode={aside}
    />
  );
};

export default Help;
