import { render } from '@testing-library/react';
import { useAppSelector } from 'hooks/useReactRedux';
import { Todo } from 'store/TodoSlice';
import TodoList from './TodoList';

jest.mock('hooks/useReactRedux');
describe('TodoList', () => {
  describe('TodoList ', () => {
    const useAppSelectorMock = useAppSelector as jest.Mock;
    it('renders todo list', () => {
      useAppSelectorMock.mockImplementation((selector) =>
        selector({
          todo: [
            { text: 'TDD를 배우자', done: false },
            { text: 'Next를 배우자', done: false },
          ],
        } as { todo: Todo[] }),
      );
      const { container } = render(<TodoList />);
      expect(container).toHaveTextContent('TDD를 배우자');
      expect(container).toHaveTextContent('TDD를 배우자');
    });
  });
});
