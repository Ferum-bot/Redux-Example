import {Action} from "@reduxjs/toolkit";
import {LikeActions, TitleAction, TitleInputOnChange} from "../types";

export function onLikeClicked(): Action<LikeActions.ON_LIKE_CLICKED> {
    return {
        type: LikeActions.ON_LIKE_CLICKED
    }
}

export function onDislikeClicked(): Action<LikeActions.ON_DISLIKE_CLICKED> {
    return {
        type: LikeActions.ON_DISLIKE_CLICKED
    }
}

export function onTitleInputChanged(input: string): Action<TitleInputOnChange> {
    return {
        type: {
            input: input
        },
    }
}