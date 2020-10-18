import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

function useReduxState() {
  const form = useSelector((state: RootState) => state);
  return form;
}

export default useReduxState;
