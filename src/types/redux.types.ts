import { ReactElement } from 'react';
import { store } from '@/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IState {
  ErrorMessage: (ReactElement | string);
  dicedetails: ReactElement[];
}
