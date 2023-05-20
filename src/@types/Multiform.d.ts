export type MultistepProps = {
  id: number;
  name: string;
  component: LazyExoticComponent<(goTo: (num: number) => void) => Element>;
};

export type addOnsOptionsType = {
  id: number;
  title: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
};

export type MultiformContextType = {
  handleData: (target: EventTarget & HTMLInputElement) => void;
  data: FormData;
  handleManualData: (
    name: string,
    value: boolean | addOnsOptionsType[]
  ) => void;
  stepIndex: number;
  handleStepIndex: (num: number) => void;
  isConfirmed: boolean;
  handleIsConfirmed: () => void;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  planType: string;
  offer: boolean;
  addons: addOnsOptionsType[];
};
