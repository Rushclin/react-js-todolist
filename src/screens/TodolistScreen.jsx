import React from 'react'
import { CountTask, TaskElement } from '../components'

const TodolistScreen = () => {
    return (
        <div className='container'>
            <h1 className='center h1'>React-Todo-list</h1>

            <div className='row'>
                <div className="col-10">
                    <input typeof='text' className='form-control' placeholder='What needs to be done?' />
                </div>
                <div className="col-2">
                    <button type='button' className='btn btn-outline-white'>Create</button>
                </div>
            </div>

            <CountTask />
            <TaskElement />
            <TaskElement />
        </div>
    )
}

export default TodolistScreen