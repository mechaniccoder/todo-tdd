import TodoListItem from 'components/TodoListItem/TodoListItem';
import { useAppSelector } from 'hooks/useReactRedux';

const TodoList = () => {
  const todo = useAppSelector((state) => state.todo);
  return (
    <ul>
      {todo.map((t) => (
        <TodoListItem key={t.text} todo={t} />
      ))}
    </ul>
  );
};

export default TodoList;
