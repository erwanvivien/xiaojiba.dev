import { CardProps } from "./Card";

type ListProps = {
  data: CardProps[];
  Component: React.FC<CardProps>;
  key: string;
};

const List: React.FC<ListProps> = ({ Component, data, key }) =>
  data.map((element, i) => <Component key={`${key}-${i}`} {...element} />);

export default List;
