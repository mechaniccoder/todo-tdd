import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './useReactRedux';

jest.mock('react-redux');

describe('useReactRedux.ts', () => {
  it('should call useSelector', () => {
    useAppSelector((state) => state);
    expect(useSelector).toHaveBeenCalledTimes(1);
  });
  it('should call useDispatch', () => {
    useAppDispatch();
    expect(useDispatch).toHaveBeenCalledTimes(1);
  });
});
