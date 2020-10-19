import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

function useLoading() {
  const { loading } = useSelector((state: RootState) => state);
  return loading;
}

export default useLoading;
