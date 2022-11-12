import React, {Dispatch} from 'react'
import './App.css'
import { connect } from "react-redux";
import {ReduxActions, State} from "./types";
import {Action} from "@reduxjs/toolkit";

interface Props {
    likes?: number
    onLikeClicked?: () => void
}

function Likes(props: Props) {
    return (
        <div className="button-controls">
            <button onClick={props.onLikeClicked}>❤️ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}

function mapStateToProps(state: State): Props {
    return {
        likes: state.likes
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action<ReduxActions>>): Props {
    return {
        onLikeClicked: () => {
            const action: Action<ReduxActions> = {
                type: ReduxActions.ON_LIKE_CLICKED
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)