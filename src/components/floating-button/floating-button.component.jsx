import './floating-button.styles.scss';

const FLoatingButton = ({ onClickHandler }) => (
    <div className='floating-button' onClick={() => onClickHandler()}>
        +
    </div>
);

export default FLoatingButton;
