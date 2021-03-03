import React from 'react';

type ITask = {
  text: string,
  key: number | string
};

type IProps = {
  items: ITask[];
  deleteItem: any
};

const TodoItems: React.FC<IProps> = (props) => {

  const { items, deleteItem } = props;

  const todoEntries = items || [];

  const createTask: any = (item: ITask) => {
    return <li key={item.key} onClick={() => deleteItem(item.key)}>{item.text}</li>
  }

  const listItems = todoEntries.map(createTask);

  return (
    <ul className="todos">{listItems}</ul>
  );
};

export default TodoItems;