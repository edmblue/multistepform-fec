import { lazy } from 'react';
import IconArcade from '../images/icon-arcade.svg';
import IconAdvanced from '../images/icon-advanced.svg';
import IconPro from '../images/icon-pro.svg';

export const steps = [
  {
    id: 0,
    name: 'Personal Info',
    component: lazy(() => import('../components/PersonalInfo')),
  },
  {
    id: 1,
    name: 'Select Plan',
    component: lazy(() => import('../components/SelectPlan')),
  },
  {
    id: 2,
    name: 'Pick add-ons',
    component: lazy(() => import('../components/AddOns')),
  },
  {
    id: 3,
    name: 'Summary',
    component: lazy(() => import('../components/FinishingUp')),
  },
];

export const plans = [
  {
    id: 0,
    name: 'Arcade',
    icon: IconArcade,
    monthlyPrice: 9,
    yearlyPrice: 90,
    note: '2 months free',
  },
  {
    id: 1,
    name: 'Advanced',
    icon: IconAdvanced,
    monthlyPrice: 12,
    yearlyPrice: 120,
    note: '2 months free',
  },
  {
    id: 2,
    name: 'Pro',
    icon: IconPro,
    monthlyPrice: 15,
    yearlyPrice: 150,
    note: '2 months free',
  },
];

export const addOnsOptions = [
  {
    id: 0,
    title: 'Online service',
    description: 'Access to multiplayer games',
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: 1,
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: 2,
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    priceMonthly: 2,
    priceYearly: 20,
  },
];
