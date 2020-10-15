import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useReduxState from '../common/useReduxState';

function useScrollToBottom() {
  const chatScreenRef = useRef<HTMLDivElement>(null);
  const {
    chat: { rooms },
  } = useReduxState();
  const { roomId } = useParams<{ roomId: string }>();
  const currentRoom = rooms.find(room => room._id === roomId);

  useEffect(() => {
    console.log(123);
    if (chatScreenRef.current) {
      chatScreenRef.current.scrollTo({ top: 7000 });
      console.log(456);
    }
  }, []);

  useEffect(() => {
    if (currentRoom && chatScreenRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = chatScreenRef.current;
      const gap = 70;
      if (scrollHeight - scrollTop - clientHeight <= gap) {
        chatScreenRef.current.scrollTo({ top: scrollHeight, behavior: 'smooth' });
      }
    }
  }, [currentRoom]);

  return chatScreenRef;
}

export default useScrollToBottom;
