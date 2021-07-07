import { render } from '@testing-library/react';
import { Todo } from 'store/TodoSlice';
import TodoListItem from './TodoListItem';

describe('TodoListItem', () => {
  describe('Checkbox', () => {
    context('with done false', () => {
      it('renders checkbox', () => {
        const todo: Todo = {
          text: 'TDD를 배우자.',
          done: false,
        };
        const { getByTestId } = render(<TodoListItem todo={todo} />);
        const checkboxElem = getByTestId('done') as HTMLInputElement;
        expect(checkboxElem.defaultChecked).toBe(false);
      });
    });

    context('with done true', () => {
      it('renders checkbox', () => {
        const todo: Todo = {
          text: 'TDD를 배우자.',
          done: true,
        };
        const { getByTestId } = render(<TodoListItem todo={todo} />);
        const checkboxElem = getByTestId('done') as HTMLInputElement;
        expect(checkboxElem.defaultChecked).toBe(true);
      });
    });
  });
  describe('Text', () => {
    it('renders text by props', () => {
      const todo: Todo = {
        text: 'TDD를 배우자.',
        done: false,
      };
      const { container } = render(<TodoListItem todo={todo} />);
      expect(container).toHaveTextContent('TDD를 배우자.');
    });
  });
});
