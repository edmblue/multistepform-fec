import IconThanks from '../images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <>
      <div className=" space-y-6 h-full flex flex-col justify-center items-center">
        <div className="flex gap-3 sm:space-y-0 justify-between flex-col text-center px-9 py-12 sm:px-0 sm:py-0">
          <div className="mx-auto">
            <img src={IconThanks} />
          </div>
          <h2 className="text-2xl font-black text-marineBlue">Thank you!</h2>
          <p className=" text-coolGray text-sm">
            Thanks for confirming the subscription! We hope you have fun using
            out platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
