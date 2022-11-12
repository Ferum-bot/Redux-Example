import {Action, configureStore } from "@reduxjs/toolkit";
import {ReduxActions, State} from "../types";

const initialState: State = {
    likes: 3
}

const reducer = (state: State = initialState, action: Action<ReduxActions>): State => {
    switch (action.type) {
        case ReduxActions.ON_LIKE_CLICKED:
            return {
                ...state,
                likes: state.likes + 1
            }
        case ReduxActions.ON_DISLIKE_CLICKED:
            return {
                ...state,
                likes: Math.max(0, state.likes - 1)
            }
        default:
            return state
    }
}

const store = configureStore({
    reducer: reducer
})

export default store