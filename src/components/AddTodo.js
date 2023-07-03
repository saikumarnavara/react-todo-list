import React, { useState } from 'react'
import TodoItems from './TodoItems'
const AddTodo = () => {
    const [item, setItem] = useState([])
    const [value, setValue] = useState('')
    const TodolistItem = (e) => {
        setValue(e.target.value)
    }
    const TodoAddItem = () => {
        setItem([...item, value])
        setValue('')
    }
    const deleteTodo = (id) => {
        const filtered = item.filter((item) => item !== id)
        setItem(filtered)
    }
    const EditTodo = (item) => {
        setValue(item)
    }
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Todo List</h1>
            <div className='d-flex justify-content-center'>
                <input type='text' placeholder='Add Todo' value={value} onChange={TodolistItem} />
                <button className='btn btn-primary' onClick={TodoAddItem}>ADD</button>
            </div>
            <div className='d-flex justify-content-center'>
                <TodoItems todo={item} deleteItem={deleteTodo} editTodo={EditTodo} />
            </div>

        </div>
    )
}

export default AddTodo
