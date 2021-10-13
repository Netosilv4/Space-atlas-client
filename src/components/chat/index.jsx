import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { RiSendPlaneFill } from 'react-icons/ri';
import { studentContext } from '../../context/studentContext';
import {
  ButtonWrapper,
  Container, MessageArea, Messages, SendButton, MessageBox, MessageHour, MessageUsername,
} from './styles';
import useAutoScroll from '../../hooks/useAutoScroll';

function Chat({ history }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userSocket, setSocket] = useState();
  const { student, setSelected } = useContext(studentContext);
  useAutoScroll(messages);

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
    setSelected(history.location.pathname);

    const div = document.querySelector('#div-scroll');
    div.style.backgroundImage = 'url("https://www.papeiseparede.com.br/3257-thickbox_default/papel-de-parede-whatsapp-branco-e-azul.jpg")';
    div.style.backgroundSize = '300px';
  }, []);

  useEffect(() => () => {
    const div = document.querySelector('#div-scroll');
    div.style.backgroundColor = 'whitesmoke';
    div.style.backgroundImage = null;
  }, []);

  const sendMessage = (userMessage, user) => {
    if (message !== '') {
      userSocket.emit('sendMessage', {
        userMessage,
        user: user.split(' ')[0],
      });
      setMessage('');
    }
  };

  const handleKeyDown = (event, msg, studentName) => {
    if (event.charCode === 13) {
      sendMessage(msg, studentName);
    }
  };

  return (
    <Container>
      <Messages>
        {messages.map((e) => (
          <MessageBox side={e.user === student.basicInfo.name.split(' ')[0]}>
            <MessageUsername>
              {e.user}
            </MessageUsername>
            {e.message}
            <MessageHour>
              {e.hour}
            </MessageHour>
          </MessageBox>
        ))}
      </Messages>
      <ButtonWrapper>
        <MessageArea type="text" value={message} onChange={({ target }) => setMessage(target.value)} onKeyPress={(event) => handleKeyDown(event, message, student.basicInfo.name)} />
        <SendButton type="button" onClick={() => sendMessage(message, student.basicInfo.name)}><RiSendPlaneFill /></SendButton>
      </ButtonWrapper>
    </Container>
  );
}

Chat.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};

export default Chat;
