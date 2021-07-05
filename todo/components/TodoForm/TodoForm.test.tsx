import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAppDispatch } from '../../hooks/useReactRedux';
import TodoForm from './TodoForm';

afterEach(cleanup);

jest.mock('../../hooks/useReactRedux');

describe('TodoForm', () => {
  describe('TodoForm UI', () => {
    it('renders input to type', () => {
      const { getByPlaceholderText } = render(<TodoForm />);
      expect(getByPlaceholderText('할 일을 입력하세요.')).toBeInTheDocument();
    });

    it('renders submit button', () => {
      const { getByRole } = render(<TodoForm />);
      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  describe('TodoForm Events', () => {
    it('changes text by user input', () => {
      const { getByPlaceholderText } = render(<TodoForm />);
      const inputElem = getByPlaceholderText('할 일을 입력하세요.') as HTMLInputElement;
      userEvent.type(inputElem, 'TDD를 배우자.');
      expect(inputElem.value).toBe('TDD를 배우자.');
    });

    it('submits form', () => {
      const dispatch = jest.fn();
      (useAppDispatch as jest.Mock).mockImplementation(() => dispatch);

      const { getByRole, getByPlaceholderText } = render(<TodoForm />);
      const inputElem = getByPlaceholderText('할 일을 입력하세요.') as HTMLInputElement;
      userEvent.type(inputElem, 'TDD를 배우자.');

      const btnElem = getByRole('button') as HTMLButtonElement;
      userEvent.click(btnElem);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'todo/addTodo',
        payload: { text: 'TDD를 배우자.', done: false },
      });
    });
  });
});
