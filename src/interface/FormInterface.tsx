import ImgDesktop from '../images/bg-sidebar-desktop.svg';
import ImgMobile from '../images/bg-sidebar-mobile.svg';
import SidebarItem from '../components/SidebarItem';
import { useEffect, useState } from 'react';
import { steps } from '../data';

type ChildrenProps = {
  children: React.ReactNode;
};

const FormInterface = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (steps.length > 0) {
      setIsLoading(true);
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          <div className="flex w-[960px] flex-col sm:flex-row sm:bg-white sm:p-5 rounded-2xl">
            <aside className="flex flex-col sm:flex-row gap-2 relative z-10">
              <div className="relative flex justify-center">
                <img src={ImgDesktop} className="hidden sm:block" />
                <img src={ImgMobile} className="block sm:hidden" />
                <nav className="absolute sm:w-full top-0 px-8 py-9">
                  <div className="flex sm:flex-col sm:gap-6 justify-center">
                    {steps?.map((item) => {
                      return <SidebarItem key={item.id} item={item} />;
                    })}
                  </div>
                </nav>
              </div>
            </aside>

            <div className=" sm:w-[464px] mx-auto bg-white px-3 relative -top-[4.1rem] sm:static z-20 rounded-lg w-[352px]">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormInterface;
