import React from 'react';
import { Todo } from 'store/TodoSlice';

interface Props {
  todo: Todo;
}
const TodoListItem: React.FC<Props> = ({ todo }) => {
  const { text, done } = todo;
  return (
    <li key={text}>
      <input type="checkbox" defaultChecked={done} data-testid="done" />
      <p>{text}</p>
    </li>
  );
};

export default TodoListItem;
