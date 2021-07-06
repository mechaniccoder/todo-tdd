import { useAppSelector } from 'hooks/useReactRedux';

const TodoList = () => {
  const todo = useAppSelector(({ todo }) => todo);
  return (
    <ul>
      {todo.map((t) => (
        <li key={t.text}>
          <input type="checkbox" defaultChecked={t.done} />
          <p>{t.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
