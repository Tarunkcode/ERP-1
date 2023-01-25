import { createSelector } from 'reselect';

const selectUser = (state : any) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], (user) => user.currentUser
);

//import { createSelector } from 'reselect';

//const selectUser = (state: any) => state.currentUser;

//export const selectCurrentUser = createSelector(
//    [selectUser], (currentUser) => { currentUser.user, currentUser.authTokens }
//);