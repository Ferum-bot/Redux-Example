import {TitleAction, TitleInputOnChange} from "../types";

export function instanceOfTitleInputOnChange(titleAction: TitleAction): titleAction is TitleInputOnChange {
    try {
        return 'input' in titleAction
    } catch (ex) {
        return false
    }
}