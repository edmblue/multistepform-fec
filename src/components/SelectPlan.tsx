import Switch from 'react-switch';
import { plans } from '../data';
import { useState } from 'react';
import useApp from '../hooks/useApp';

const SelectPlan = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { handleData, handleManualData, data } = useApp();

  const handleChange = () => {
    setIsChecked((value: boolean) => !value);
    handleManualData('offer', !isChecked);
  };

  const handlePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleData(e.target);
  };

  return (
    <>
      <p className="text-coolGray">
        You have the option of monthly or yealy bill
      </p>
      <div className="mt-8 space-y-6">
        <div className="flex space-y-3 sm:space-y-0 justify-between flex-col sm:flex-row">
          {plans.map((plan) => (
            <label
              key={plan.id}
              htmlFor={plan.name}
              className=" sm:w-1/3 mx-2 "
            >
              <input
                type="radio"
                name="planType"
                value={plan.id}
                id={plan.name}
                className="hidden peer"
                onChange={handlePlan}
              />
              <div
                className={`border rounded-lg px-4 py-4 cursor-pointer hover:border-purplishBlue flex sm:flex-col gap-3 items-center sm:items-start ${
                  +data.planType === plan.id
                    ? 'bg-alabaster border-purplishBlue '
                    : ''
                } "`}
              >
                <div>
                  <img src={plan.icon} />
                </div>

                <div className="sm:mt-12">
                  <p className="font-bold text-marineBlue text-lg">
                    {plan.name}
                  </p>
                  <span className="text-coolGray text-sm">
                    $
                    {data.offer
                      ? plan.yearlyPrice + '/yr'
                      : plan.monthlyPrice + '/mo'}
                  </span>
                  <p
                    className={`${
                      data.offer ? 'block' : 'hidden'
                    } mt-1 text-sm text-marineBlue font-bold`}
                  >
                    2 months free
                  </p>
                </div>
              </div>{' '}
            </label>
          ))}
        </div>
        <div className="bg-magnolia flex justify-center gap-4 font-bold text-marineBlue py-3 rounded-md">
          <p className={`${data.offer ? 'text-coolGray' : ''}`}>Monthly</p>
          <Switch
            onChange={handleChange}
            checked={data.offer}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#02295a"
            offColor="#02295a"
            handleDiameter={18}
            height={25}
            width={50}
          />
          <p className={`${data.offer ? '' : 'text-coolGray'}`}>Yearly</p>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
