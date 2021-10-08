import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';

const useLogin = () => {
  const [image, setImage] = useState();
  const { login } = useContext(UserContext);

  const handleKeyDown = (event, register, password) => {
    if (event.charCode === 13) {
      login(register, password);
    }
  };

  function randomBackground() {
    const array = [
      'https://images.pexels.com/photos/1236421/pexels-photo-1236421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1764435/pexels-photo-1764435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/5759789/pexels-photo-5759789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/2574616/pexels-photo-2574616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/5538001/pexels-photo-5538001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/4861362/pexels-photo-4861362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ];
    setImage(array[Math.floor(Math.random() * 7)]);
  }

  useEffect(() => {
    randomBackground();
  }, []);

  return {
    image, handleKeyDown,
  };
};

export default useLogin;
