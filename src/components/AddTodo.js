import React, { useEffect, useState } from 'react'
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
        localStorage.setItem('todo', JSON.stringify([...item, value]))
    }
    const deleteTodo = (id) => {
        const filtered = item.filter((item) => item !== id)
        setItem(filtered)
    }

    const storedData = localStorage.getItem('todo');
    const data = JSON.parse(storedData)
    useEffect(() => {
        if (data) {
            setItem(data)
        }
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Todo List</h1>
            <div className='d-flex justify-content-center'>
                <input type='text' placeholder='Add Todo' className='mr-2' value={value} onChange={TodolistItem} />
                <button className='btn btn-primary' onClick={TodoAddItem}>ADD</button>
            </div>
            <div className='d-flex justify-content-center'>
                <TodoItems todo={item} deleteItem={deleteTodo} />
            </div>

        </div>
    )
}

export default AddTodo
