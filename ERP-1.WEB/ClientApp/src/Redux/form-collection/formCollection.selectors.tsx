import { createSelector } from 'reselect';


const selectData = (state: any) => state.data;

export const selectCurrentData = createSelector(
    [selectData], (saveFormData) => saveFormData // data= whole state{}
);