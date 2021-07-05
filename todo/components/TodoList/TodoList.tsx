import { useAppSelector } from 'hooks/useReactRedux';

const TodoList = () => {
  const todo = useAppSelector(({ todo }) => todo);
  return <div></div>;
};

export default TodoList;
