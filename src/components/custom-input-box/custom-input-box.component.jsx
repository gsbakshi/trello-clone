import React from 'react';

import './custom-input-box.styles.scss';

import TextBox from '../text-box/text-box.component';

const CustomInputBox = ({
    placeholder = 'Add Task',
    input,
    onInputChange,
    onEnter,
    onSubmit,
}) => (
    <div className='input-container'>
        <TextBox
            placeholder={placeholder}
            value={input}
            onChange={onInputChange}
            onKeyDown={onEnter}
            component={
                <button className='detect' onClick={onSubmit}>
                    <i className='fa fa-angle-right' />
                </button>
            }
        />
    </div>
);

export default CustomInputBox;
