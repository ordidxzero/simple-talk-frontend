import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useReduxState from '../../common/hooks/useReduxState';

function useAuth() {
  const history = useHistory();
  const {
    auth: { auth, authError },
  } = useReduxState();

  useEffect(() => {
    if (auth) {
      try {
        localStorage.setItem('simple_talk_auth', JSON.stringify(auth));
        history.push('/');
      } catch {
        console.log('localStorage is not working');
      }
    }
  }, [auth, history]);

  return { authError };
}

export default useAuth;
