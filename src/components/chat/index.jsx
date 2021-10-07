import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { studentContext } from '../../context/studentContext';
import {
  ButtonWrapper,
  Container, MessageArea, Messages, SendButton,
} from './styles';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userSocket, setSocket] = useState();
  const { student } = useContext(studentContext);

  useEffect(() => {
    const socketServer = io('https://atlas-school-system.herokuapp.com/');

    socketServer.emit('welcome', {
      student,
    });

    socketServer.on('newMessage', (socket) => {
      const aux = messages;
      aux.push({ message: socket.message, user: socket.user, hour: socket.hour });
      setMessages([...aux]);
    });

    setSocket(socketServer);
  }, []);

  const sendMessage = (userMessage, user) => {
    userSocket.emit('sendMessage', {
      userMessage,
      user: user.split(' ')[0],
    });
  };

  return (
    <Container>
      <Messages>
        {messages.map((e) => (
          <p>
            {e.user}
            {' '}
            -
            {' '}
            {e.message}
            {' '}
            {e.hour}
          </p>
        ))}
      </Messages>
      <ButtonWrapper>
        <MessageArea type="text" value={message} onChange={({ target }) => setMessage(target.value)} />
        <SendButton type="button" onClick={() => sendMessage(message, student.basicInfo.name)}>Enviar</SendButton>
      </ButtonWrapper>
    </Container>
  );
}

export default Chat;
