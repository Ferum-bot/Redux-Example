import React from 'react'
import {useState} from "react";
import "./App.css"
import SingleComment from './single-comment'

function Comments() {
    const [textComment, setTextComment] = useState('')

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextComment(event.target.value)
        console.log('Handle input')
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Submit text comment')

    }

    return (
        <div className='card-comments'>
            <form className='comments-item-create' onSubmit={handleSubmit}>
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>
                <SingleComment />
            </form>
        </div>
    )
}

export default Comments