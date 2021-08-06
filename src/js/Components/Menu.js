import React from 'react'
import "./Menu.css"

const Menu = (props) => {

    const addItemHandler = () => {
        props.handleAddItem()
    }

    const deleteEditMode = () => {
        props.handleCancelEditMode()
    }


    return (
        <div className="formButtonControl">
            <button className="btn addBtn" onClick={addItemHandler}>
                <i className="fa fa-check fa-3x formIconLocation" />
            </button>
            <button className="btn xBtn" onClick={deleteEditMode}>
                <i className="fa fa-times fa-3x formIconLocation" />
            </button>
        </div>
    )
}


export default Menu