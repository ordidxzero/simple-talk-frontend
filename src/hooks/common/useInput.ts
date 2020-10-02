import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/store';
import { changeText, InputState } from '../../lib/store/input';

type NewInputState = Omit<InputState, 'search'>;

function useInput() {
  const dispatch = useDispatch();
  const form = useSelector(({ input }: RootState) => input);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    dispatch(changeText({ key: name, value }));
  };

  return { form, onChange };
}

export default useInput;
