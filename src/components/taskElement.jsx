import React from 'react'

export const TaskElement = props => {
    return (
        <div className='row my-3'>
            <div className="col-6">
                <p>Make a React Tutorial</p>
            </div>
            <div className="col-2">
                <button className="btn btn-danger">Undone</button>
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Edit</button>
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Delete</button>
            </div>
        </div>
    )
}