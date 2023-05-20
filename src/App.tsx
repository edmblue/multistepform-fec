import FormInterface from './interface/FormInterface';
import useMultiStep from './hooks/useMultiStep';
import { steps } from './data';
import { Suspense, useEffect } from 'react';
import useApp from './hooks/useApp';
import ThankYou from './components/ThankYou';
import Spinner from './components/Spinner';

function App() {
  const { handleStepIndex, handleIsConfirmed, isConfirmed, data } = useApp();

  const { next, back, currentStep, isFirst, goTo, isLast, step } =
    useMultiStep(steps);

  useEffect(() => {
    handleStepIndex(step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLast) {
      handleIsConfirmed();

      return;
    }

    next();
  };

  return (
    <FormInterface>
      {isConfirmed ? (
        <ThankYou />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full py-5 group"
          noValidate={true}
        >
          <h1 className="text-3xl font-bold text-marineBlue">
            {currentStep?.name}
          </h1>
          <Suspense fallback={<Spinner />}>
            <currentStep.component goTo={goTo} />
          </Suspense>
          <div
            className={`mt-4 sm:mt-auto flex ${
              isFirst ? 'justify-end' : 'justify-between'
            }`}
          >
            <button
              type="button"
              className={`hover:text-marineBlue font-bold text-coolGray py-2 px-5 rounded-md text-[13px] ${
                isFirst ? 'hidden' : 'block'
              }`}
              onClick={back}
            >
              Go Back
            </button>
            <button
              type="submit"
              className="hover:bg-purplishBlue bg-marineBlue text-white py-2 px-5 rounded-md text-[12px] group-invalid:pointer-events-none group-invalid:opacity-30 self-end"
            >
              {isLast ? 'Confirm' : 'Next Step'}
            </button>
          </div>
        </form>
      )}
    </FormInterface>
  );
}

export default App;
