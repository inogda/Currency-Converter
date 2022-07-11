import {configureStore} from '@reduxjs/toolkit';

import valutaReducer from './slices/valutaSlice';

export const store = configureStore({
    reducer: {
        valuta: valutaReducer,
    }
});
