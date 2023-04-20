import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Task = ({ task, toogleComplete, deleteTodo }) => {
  return (
    <div className='task'>
        <p onClick={() => toogleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
