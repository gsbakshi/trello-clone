import { useState } from 'react';

import TextBox from '../text-box/text-box.component';
import CustomInputBox from '../custom-input-box/custom-input-box.component';

import FloatingButton from '../floating-button/floating-button.component';
import TaskCard from '../task/task.component';

import Task from '../../utilities/task';

import './card.styles.scss';

const CustomCard = ({
    updateTitle,
    updateTasks,
    deleteCardGroup,
    taskGroup,
}) => {
    const [isInputTitle, setIsInputTitle] = useState(false);
    const [title, setTitle] = useState(taskGroup.title);
    const [task, setTask] = useState('');

    const inputTitleHandler = () => setIsInputTitle(!isInputTitle);

    const updateCardTitle = (event) => {
        event.preventDefault();
        const value = event.target.value.trim();
        setTitle(value);
    };

    const submitTitle = (event) => {
        if (event.key === 'Enter') {
            setIsInputTitle(!isInputTitle);
            updateTitle(taskGroup.id, title);
        }
    };

    const deleteCard = () => {
        console.log(taskGroup.id, 'deleted');
        deleteCardGroup(taskGroup.id);
    };

    const updateTaskInput = (event) => {
        event.preventDefault();
        const value = event.target.value.trim();
        setTask(value);
    };

    const onEnter = (event) => {
        if (event.key === 'Enter') submitTask();
    };

    const submitTask = () => {
        const newTask = new Task();
        newTask.content = task;
        const tmp = [...taskGroup.tasks];
        tmp.push(newTask);
        updateTasks(taskGroup.id, tmp);
        setTask('');
    };

    const deleteTask = (id) => {
        const tmp = taskGroup.tasks.filter((task) => task.id !== id);
        updateTasks(taskGroup.id, tmp);
    };

    const renderCardTitle = () => {
        return isInputTitle ? (
            <TextBox
                placeholder='Enter title'
                onChange={updateCardTitle}
                onKeyDown={submitTitle}
                value={title}
                autofocus
                inputType='text'
            />
        ) : (
            <div className='title' onClick={() => inputTitleHandler()}>
                {taskGroup.title}
            </div>
        );
    };

    const renderTasks = () => {
        return taskGroup.tasks.length > 0
            ? taskGroup.tasks.map((task) => (
                  <TaskCard
                      key={task.id}
                      taskProps={task}
                      deleteTask={deleteTask}
                  />
              ))
            : 'Add Some Tasks';
    };

    return (
        <div className='card-component-group'>
            <div className='input-card-title'>{renderCardTitle()}</div>
            <div className='card-content'>{renderTasks()}</div>
            <div className='buttons'>
                <CustomInputBox
                    input={task}
                    onInputChange={updateTaskInput}
                    onEnter={onEnter}
                    onSubmit={submitTask}
                />
                <FloatingButton
                    onClickHandler={deleteCard}
                    iconType='fa-times'
                    alt
                />
            </div>
        </div>
    );
};

export default CustomCard;
