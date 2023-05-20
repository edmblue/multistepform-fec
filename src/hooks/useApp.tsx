import { useContext } from 'react';
import MultiformContext from '../context/MultiformProvider';
import { MultiformContextType } from '../@types/Multiform';

const useApp = () => {
  return useContext(MultiformContext) as MultiformContextType;
};

export default useApp;
