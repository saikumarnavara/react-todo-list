import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
const TodoItems = ({ todo, deleteItem }) => {
    const todoList = todo
    const [Todo, setTodo] = useState()
    useEffect(() => {
        setTodo(todo)
    }, [todo])

    console.log(Todo, 'gabbar')
    if (Todo === undefined || Todo.length === 0) {
        return (
            <div><h1>welcome</h1>  </div>

        )
    }
    return (
        <div className='container-sm pt-5' style={{ maxWidth: '400px' }}>
            <div className='col'>
                {Todo.map((item, index) => (
                    <div className='card shadow mb-2 bg-primary text-white' key={index} >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='card-body'>
                                {item}
                            </div>
                            <div>
                                <h3 onClick={() => { deleteItem(item) }}>{<AiFillDelete />}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TodoItems
