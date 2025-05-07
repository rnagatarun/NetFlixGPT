import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer.reducer,
    }
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;