import { addOnsOptions } from '../data';
import { addOnsOptionsType } from '../@types/Multiform';
import useApp from '../hooks/useApp';
import { useState, useEffect } from 'react';

const AddOns = () => {
  const { data, handleManualData } = useApp();

  const [addArray, setAddArray] = useState<addOnsOptionsType[]>(data.addons);

  useEffect(() => {
    handleManualData('addons', addArray);
  }, [addArray]);

  const handleAddOns = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    item: addOnsOptionsType
  ) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    if (isChecked) {
      setAddArray((prev) => {
        return [...prev, item];
      });
    } else {
      setAddArray(() =>
        addArray.filter((itemPrev) => !(itemPrev.id === item.id))
      );
    }
  };

  return (
    <>
      <p className="text-coolGray">
        Add-ons help enhance your gaming experience
      </p>
      <div className="mt-8 space-y-6">
        <div className="flex space-y-3 sm:space-y-4 justify-between flex-col">
          {addOnsOptions.map((item: addOnsOptionsType) => (
            <div key={item.id}>
              <label
                htmlFor={item.title.replace(' ', '')}
                className={`cursor-pointer flex justify-between border hover:border-purplishBlue rounded-md p-4 ${
                  addArray.some((itemPrev) => itemPrev.id === item.id)
                    ? 'bg-alabaster border-purplishBlue'
                    : ''
                }`}
              >
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    name={item.title.replace(' ', '')}
                    id={item.title.replace(' ', '')}
                    className="accent-purplishBlue"
                    value={item.id}
                    onClick={(e) => handleAddOns(e, item)}
                    defaultChecked={addArray.some(
                      (itemPrev) => itemPrev.id === item.id
                    )}
                  />
                  <div>
                    <p className="text-marineBlue font-bold text-md">
                      {item.title}
                    </p>
                    <p className="text-sm text-coolGray font.bold">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="self-center">
                  <p className="text-purplishBlue font-bold text-sm">
                    +$
                    {data.offer
                      ? item.priceYearly + '/yr'
                      : item.priceMonthly + '/mo'}
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddOns;
