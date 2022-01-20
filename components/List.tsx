import { NextPage } from "next";

type ListProps = {
  data: any[];
  Component: NextPage<any>;
  key: string;
};

const List: NextPage<ListProps> = ({ Component, data, key }) => (
  <>
    {data.map((element) => (
      <Component key={element[key]} {...element} />
    ))}
  </>
);

export default List;
