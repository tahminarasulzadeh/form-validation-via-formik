import { createSelector } from "reselect";

export const messageSelector = createSelector(
    state => state.message,
    message => message?.message
)