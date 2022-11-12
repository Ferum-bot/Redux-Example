import {Action, combineReducers, configureStore} from "@reduxjs/toolkit";
import {LikeActions, State, TitleAction} from "../types";
import {instanceOfTitleInputOnChange} from "./helpers";

const initialState: State = {
    likes: 3,
    titleInput: ''
}

const likesReducer = (state: State = initialState, action: Action<LikeActions>): State => {
    switch (action.type) {
        case LikeActions.ON_LIKE_CLICKED:
            return {
                ...state,
                likes: state.likes + 1
            }
        case LikeActions.ON_DISLIKE_CLICKED:
            return {
                ...state,
                likes: Math.max(0, state.likes - 1)
            }
        default:
            return state
    }
}

const titleReducer = (state: State = initialState, action: Action<TitleAction>): State => {
    if (instanceOfTitleInputOnChange(action.type)) {
        return {
            ...state,
            titleInput: action.type.input
        }
    }
    return state
}

const store = configureStore({
    reducer: combineReducers({
        likesReducer, titleReducer
    })
})

export default store