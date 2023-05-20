import { useEffect, useState } from 'react';
import { plans } from '../data';
import useApp from '../hooks/useApp';

type finishingUpProp = {
  goTo: (num: number) => void;
};

const FinishingUp = ({ goTo }: finishingUpProp) => {
  const { data } = useApp();
  const [total, setTotal] = useState(0);

  console.log(data);

  const plan = plans[+data.planType];
  const offer = data.offer ? 'Yearly' : 'Monthly';
  const planPrice = data.offer ? plan.yearlyPrice : plan.monthlyPrice;

  const addOnsPrice = data.addons.reduce(
    (total, item) =>
      data.offer ? item.priceYearly + total : item.priceMonthly + total,
    0
  );

  useEffect(() => {
    setTotal(() => planPrice + addOnsPrice);
  }, [planPrice, addOnsPrice]);

  return (
    <>
      <p className="text-coolGray">
        Double-check everything looks OK before confirming
      </p>
      <div className="mt-8 space-y-6">
        <div className="flex space-y-3 sm:space-y-4 justify-between flex-col">
          <div className="bg-alabaster p-4 rounded-md">
            <div className=" flex justify-between items-center">
              <div>
                <p className="font-bold text-marineBlue">
                  {plan.name} ({offer})
                </p>
                <button
                  onClick={() => {
                    goTo(1);
                  }}
                  type="button"
                  className="text-coolGray text-sm underline hover:text-purplishBlue"
                >
                  Change
                </button>
              </div>
              <div>
                <p className="font-bold text-marineBlue">
                  ${planPrice}
                  {offer ? '/yr' : 'mo'}
                </p>
              </div>
            </div>
            <hr className="w-11/12 my-3 mx-auto" />
            <div className="space-y-4">
              {data.addons.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm items-center"
                >
                  <p className=" text-coolGray">{item.title}</p>
                  <p className="font-bold">
                    +
                    {data.offer
                      ? item.priceYearly + '/yr'
                      : item.priceMonthly + '/mo'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-coolGray">
              Total (per {offer ? 'year' : 'month'})
            </p>
            <p className="font-bold text-purplishBlue ">
              +${total}/{offer ? 'yr' : 'mo'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishingUp;
