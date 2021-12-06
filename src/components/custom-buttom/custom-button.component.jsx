import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, alternate, ...otherProps }) => (
    <button className={ `${alternate ? 'alternate' : ''} custom-button` } { ...otherProps }>
        { children }
    </button>
);

export default CustomButton;