import type { Website } from "../pages/websites";

type ListProps = {
  data: Website[];
  Component: React.FC<Website>;
  key: string;
};

const List: React.FC<ListProps> = ({ Component, data, key }) =>
  data.map((element, i) => <Component key={`${key}-${i}`} {...element} />);

export default List;
