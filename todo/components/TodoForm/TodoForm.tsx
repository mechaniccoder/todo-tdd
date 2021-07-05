import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/useReactRedux';
import { addTodo } from '../../store/TodoSlice';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useAppDispatch();

  const handleOnSubmit = useCallback(() => {
    dispatch(addTodo({ text: todo, done: false }));
  }, [dispatch, todo]);
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit" onClick={handleOnSubmit}>
        화이팅!
      </button>
    </div>
  );
};

export default TodoForm;
