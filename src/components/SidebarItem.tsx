import useApp from '../hooks/useApp';

type dataItem = {
  id: number;
  name: string;
};

type SidebarItemProps = {
  item: dataItem;
};

const SidebarItem = ({ item }: SidebarItemProps) => {
  const { stepIndex } = useApp();

  return (
    <div className="flex items-center sm:gap-3 justify-center sm:justify-start ">
      <div
        className={`border text-white flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm mx-2 sm:mx-0 ${
          stepIndex === item.id
            ? 'bg-lightBlue text-blue-900 text-black font-bold'
            : ''
        }`}
      >
        <span>{item.id + 1}</span>
      </div>
      <div className="uppercase text-[0.8rem] hidden sm:block">
        <p className=" text-pastelBlue ">Step {item.id + 1} </p>
        <p className="font-bold text-white tracking-widest">{item.name}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
