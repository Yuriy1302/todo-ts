import React from 'react';

type ITask = {
  text: string,
  key: number | string
}

type IProps = {
  currentItem: ITask,
  handleInput: any,
  addItem: any
}

const TodoList: React.FC<IProps> = (props) => {

  const { currentItem, handleInput, addItem } = props;

  return (
    <div className="todo-main">
      <div className="header">
        <form onSubmit={addItem}>
          <input
            className="todo-add"
            type="text"
            placeholder="Task"
            value={currentItem.text}
            onChange={handleInput}
          />
          <button type="submit" className="btn-add">Add task</button>
        </form>
      </div>
    </div>
  )
};

export default TodoList;