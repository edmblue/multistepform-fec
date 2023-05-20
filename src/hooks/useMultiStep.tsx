import { useState } from 'react';
import { MultistepProps } from '../@types/Multiform';

const useMultiStep = (steps: MultistepProps[]) => {
  const [step, setStep] = useState(0);

  const isLast = step === steps?.length - 1;
  const isFirst = step === 0;

  const next = (): void => {
    if (isLast) return;
    setStep((current) => current + 1);
  };

  const back = (): void => {
    if (isFirst) return;
    setStep((current) => current - 1);
  };

  const goTo = (num: number) => {
    setStep(num);
  };

  return {
    step,
    next,
    back,
    currentStep: steps[step],
    isLast,
    isFirst,
    goTo,
  };
};

export default useMultiStep;
