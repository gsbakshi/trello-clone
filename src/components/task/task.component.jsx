import { useState } from 'react';
import CustomInputBox from '../custom-input-box/custom-input-box.component';

import './task.styles.scss';

const TaskCard = ({ content }) => {
    const [isInputTask, setIsInputTask] = useState(false);
    const [task, setTask] = useState(content);

    const editTitleHandler = () => setIsInputTask(!isInputTask);

    const updateTask = (event) => {
        event.preventDefault();
        const value = event.target.value.trim();
        setTask(value);
    };

    const onEnter = (event) => {
        if (event.key === 'Enter') submitTask();
    };

    const submitTask = () => {
        setIsInputTask(!isInputTask);
        // updateTask(task.id, content);
    };

    const deleteTask = (event) => {
        event.preventDefault();
        console.log('delete task');
        // deleteCardGroup(taskProps.id);
    };

    return isInputTask ? (
        <CustomInputBox
            input={task}
            onInputChange={updateTask}
            onEnter={onEnter}
            onSubmit={submitTask}
        />
    ) : (
        <div className='task-container'>
            <div className='text-box'>{task}</div>
            <div className='task-options'>
                <button className='option' onClick={editTitleHandler}>
                    <i className='fas fa-pen'></i>
                </button>
                <button className='option' onClick={deleteTask}>
                    <i className='fas fa-trash'></i>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
