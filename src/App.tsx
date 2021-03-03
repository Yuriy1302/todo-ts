import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoItems from './TodoItems';

import './App.css';

type ITask = {
  text: string,
  key: number | string
};

type IItems = ITask[];

const App: React.FC = () => {
  const [items, setItems] = useState<IItems>([]);
  const [currentItem, setCurrentItem] = useState<ITask>({ text: '', key: '' });

  const handleInput = (event: React.ChangeEvent<HTMLFormElement>) => {
    const itemText = event.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
  }

  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem = currentItem;
    if(newItem.text !== '') {
      console.log(newItem);
      const newItems = [ newItem, ...items ];
      setItems(newItems);
      setCurrentItem({ text: '', key: '' });
    }
  }

  const deleteItem = (key: string) => {
    const filterItems = items.filter((item) => item.key !== key);
    setItems(filterItems);
  }
  
  return (
    <div className="App">
      <h1>todo</h1>
      <TodoList
        currentItem={currentItem}
        handleInput={handleInput}
        addItem={addItem}
      />
      <TodoItems
        deleteItem={deleteItem}
        items={items}
      />
    </div>
  );
}

export default App;
