import axios from 'axios';

const useRequest = (student) => {
  const sendRequest = async (previewValue, newValue, reason, file) => {
    const request = {
      name: student.basicInfo.name,
      register: student.auth.register,
      previewValue,
      newValue,
      reason,
      file,
    };
    const response = await axios.post('localhost:3000/request', {
      request,
    });
    return response;
  };
  return {
    sendRequest,
  };
};

export default useRequest();
