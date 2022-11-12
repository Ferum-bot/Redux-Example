export interface State {
    readonly likes: number
}

export enum ReduxActions {
    ON_LIKE_CLICKED = 'on_like_clicked',
    ON_DISLIKE_CLICKED = 'on_dislike_clicked'
}