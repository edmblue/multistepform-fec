import useApp from '../hooks/useApp';

const PersonalInfo = () => {
  const { data, handleData } = useApp();

  return (
    <>
      <p className="text-coolGray">
        Please provide your name, email and phone number
      </p>
      <div className="mt-8 space-y-6">
        <div className="flex flex-col gap-1 relative">
          <label className="font-bold text-marineBlue" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="peer p-2 rounded-md text-marineBlue placeholder:font-normal font-bold pl-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:border-marineBlue border focus:outline-none"
            pattern="[a-zA-Z ]{2,254}"
            value={data.name}
            onChange={(e) => handleData(e.target)}
            required
          />
          <p className="text-sm font-bold invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-strawberryRed absolute right-0">
            Enter a valid name
          </p>
        </div>
        <div className="flex flex-col gap-1 relative">
          <label className="font-bold text-marineBlue" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. sthephenking@lorem.com"
            className="peer p-2 rounded-md text-marineBlue placeholder:font-normal font-bold pl-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:border-marineBlue border focus:outline-none"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={data.email}
            onChange={(e) => handleData(e.target)}
            required
          />
          <p className="text-sm font-bold invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-strawberryRed absolute right-0">
            Use a valid email format
          </p>
        </div>

        <div className="flex flex-col gap-1 relative ">
          <label className="font-bold text-marineBlue" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            pattern="\w{9,15}[0-9]"
            placeholder="e.g. +1 234 567 890"
            className="peer p-2 rounded-md text-marineBlue placeholder:font-normal font-bold pl-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:border-marineBlue border focus:outline-none"
            value={data.phone}
            onChange={(e) => handleData(e.target)}
            required
          />
          <p className="text-sm font-bold invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-strawberryRed absolute right-0 ">
            Invalid Phone Number
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
