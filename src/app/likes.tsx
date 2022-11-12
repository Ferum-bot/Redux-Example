import React, {Dispatch} from 'react'
import './App.css'
import {connect} from "react-redux";
import {ReduxActions, State} from "./types";
import {Action} from "@reduxjs/toolkit";
import {onLikeClicked, onDislikeClicked} from "./redux/actions";

interface Props {
    likes?: number
    onLikeClicked?: () => void
    onDislikeClicked?: () => void
}

function Likes(props: Props) {
    return (
        <div className="button-controls">
            <button onClick={props.onLikeClicked}>❤️ {props.likes}</button>
            <button onClick={props.onDislikeClicked}>Dislike</button>
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
        onLikeClicked: () => dispatch(onLikeClicked()),
        onDislikeClicked: () => dispatch(onDislikeClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)