export interface State {
    readonly likes: number
    readonly titleInput: string
}

export enum LikeActions {
    ON_LIKE_CLICKED = 'on_like_clicked',
    ON_DISLIKE_CLICKED = 'on_dislike_clicked',
}

export interface TitleAction { }

export interface TitleInputOnChange extends TitleAction {
    readonly input: string
}