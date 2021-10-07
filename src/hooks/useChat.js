/* eslint-disable */
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';

const useChat = () => {
  const [useSocket, setSocket] = useState();
  const [messages] = useState();
  

  return {
    messages
  };
};

export default useChat;
