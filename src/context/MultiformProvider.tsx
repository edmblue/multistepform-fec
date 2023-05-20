import { createContext, useState } from 'react';
import {
  MultiformContextType,
  FormData,
  addOnsOptionsType,
} from '../@types/Multiform';

export type MultiformProviderProps = {
  children: React.ReactNode;
};

const MultiformContext = createContext<MultiformContextType | null>(null);

const MultiformProvider = ({ children }: MultiformProviderProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const FORM_DATA: FormData = {
    name: '',
    email: '',
    phone: '',
    planType: '0',
    offer: false,
    addons: [],
  };

  const handleStepIndex = (num: number) => {
    setStepIndex(num);
  };

  const handleIsConfirmed = () => {
    localStorage.setItem('data', JSON.stringify(FORM_DATA));
    setIsConfirmed(true);
  };

  const value = localStorage.getItem('data');

  const [data, setData] = useState<FormData>(
    typeof value === 'string'
      ? JSON.parse(value) ?? { ...FORM_DATA }
      : { ...FORM_DATA }
  );

  const handleData = (target: EventTarget & HTMLInputElement) => {
    setData((data: FormData) => {
      return {
        ...data,
        [target.name]: target.value,
      };
    });
  };

  const handleManualData = (
    name: string,
    value: boolean | addOnsOptionsType[]
  ) => {
    setData((data: FormData) => {
      return { ...data, [name]: value };
    });
  };

  return (
    <MultiformContext.Provider
      value={{
        handleData,
        data,
        handleManualData,
        stepIndex,
        handleStepIndex,
        isConfirmed,
        handleIsConfirmed,
      }}
    >
      {children}
    </MultiformContext.Provider>
  );
};

export { MultiformProvider };

export default MultiformContext;
