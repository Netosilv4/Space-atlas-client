import { useEffect } from 'react';

const useAutoScroll = (messages) => {
  const autoScroll = () => {
    const div = document.querySelector('#div-scroll');
    div.scrollTop = div.scrollHeight;
  };

  useEffect(() => {
    autoScroll();
  }, [messages]);
};

export default useAutoScroll;
