import { configureStore } from '@reduxjs/toolkit';
import DiceReducer from '@/reducers/DiceReducer';

export const store = configureStore({
  reducer: {
    dice: DiceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
