import { useState } from 'react';

import './card.styles.scss';

const CustomCard = ({ id, deleteCardGroup }) => {
    const [isInputTitle, setIsInputTitle] = useState(false);
    const [title, setTitle] = useState('');

    const inputTitleHandler = () => setIsInputTitle(!isInputTitle);

    const updateTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value.trim());
    };

    const submitTitle = (event) => {
        if (event.key === 'Enter') {
            setIsInputTitle(!isInputTitle);
        }
    };

    const deleteCard = (event) => {
        event.preventDefault();
        console.log(id, 'deleted');
        deleteCardGroup(id);
    };

    return (
        <div className='card-component-group'>
            <div className='input-card-title'>
                {isInputTitle ? (
                    <input
                        className='input-title'
                        placeholder='Task Group'
                        value={title}
                        onChange={updateTitle}
                        onKeyPress={submitTitle}
                    ></input>
                ) : (
                    <div className='title' onClick={() => inputTitleHandler()}>
                        {title || 'Card'}
                    </div>
                )}
            </div>
            <input
                className='input-task'
                type='text'
                placeholder='Add Task'
            ></input>
            <button className='delete-task'>+</button>
            <button className='delete-card' onClick={deleteCard}>
                Delete
            </button>
        </div>
    );
};

export default CustomCard;
