import './floating-button.styles.scss';

const FloatingButton = ({ onClickHandler, iconType, alt }) => (
    <button
        className={`${alt ? 'alt' : ''} floating-button`}
        onClick={onClickHandler}
    >
        <i className={`fa ${iconType}`}></i>
    </button>
);

export default FloatingButton;
