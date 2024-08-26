import { useEffect, useRef } from 'react';

const useWebSocket = (url: string) => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socketRef.current?.close();
    };
  }, [url]);

  const sendMessage = (message: any) => {
    socketRef.current?.send(JSON.stringify(message));
  };

  return { sendMessage };
};

export default useWebSocket;
