import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            console.log("Submit hecho")

            setCategories(cats => [inputValue, ...cats])
            setInputValue("")
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}






















