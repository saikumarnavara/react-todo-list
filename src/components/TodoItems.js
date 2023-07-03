import React, { useEffect, useState } from 'react'

const TodoItems = ({ todo, deleteItem, editTodo }) => {
    const todoList = todo
    const [Todo, setTodo] = useState()
    useEffect(() => {
        setTodo(todo)
    }, [todo])


    if (Todo === undefined) {
        return (
            <div><h1>welcome</h1>  </div>

        )
    }
    return (
        <div className='container'>
            <div className='col'>
                {Todo.map((item, index) => (

                    <div className='card shadow' key={index}>
                        <div className='card-body'>
                            {item}
                        </div>
                        <div>
                            <button onClick={() => { deleteItem(item) }}>delete</button>
                            <button onClick={() => { editTodo(item) }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TodoItems
