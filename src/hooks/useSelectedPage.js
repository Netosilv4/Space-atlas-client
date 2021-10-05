import { useState } from 'react';

const useSelectedPage = () => {
  const [selected, setSelected] = useState();

  return {
    selected,
    setSelected,
  };
};

export default useSelectedPage;
