import axios from 'axios';

const useRequest = () => {
  const sendRequest = async (student, target, newValue, reason) => {
    const request = {
      register: student.auth.register,
      name: student.basicInfo.name,
      target,
      newValue,
      reason,
    };
    return axios.post('https://atlas-school-system.herokuapp.com/request', {
      register: student.auth.register,
      request,
    });
  };

  return {
    sendRequest,
  };
};

export default useRequest;
