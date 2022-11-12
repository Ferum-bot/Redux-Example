import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {onTitleInputChanged} from "./redux/actions";
import "./App.css"

interface Props {

}

function Title(props: Props) {
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onTitleInputChanged(event.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type='text' onChange={handleChange}/>
            </div>
        </div>
    )
}

export default Title