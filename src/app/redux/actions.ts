import {Action} from "@reduxjs/toolkit";
import {ReduxActions} from "../types";

export function onLikeClicked(): Action<ReduxActions.ON_LIKE_CLICKED> {
    return {
        type: ReduxActions.ON_LIKE_CLICKED
    }
}

export function onDislikeClicked(): Action<ReduxActions.ON_DISLIKE_CLICKED> {
    return {
        type: ReduxActions.ON_DISLIKE_CLICKED
    }
}