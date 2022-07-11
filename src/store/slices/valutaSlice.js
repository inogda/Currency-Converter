import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    rateVal: [],
};

const valutaSlice = createSlice({
    name: 'valuta',
    initialState,
    reducers: {
        setValuta(state, action) {
            state.rateVal = action.payload.rateVal;
        },
        removeValuta(state) {
            state.rateVal = [];
        },
    },
});

export const {setValuta, removeValuta} = valutaSlice.actions;

export default valutaSlice.reducer;
