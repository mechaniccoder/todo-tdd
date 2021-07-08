import React from 'react';
import TodoForm from 'components/TodoForm/TodoForm';
import TodoList from 'components/TodoList/TodoList';

const TodoTemplate = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoTemplate;
