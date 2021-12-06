import { useState } from 'react';

import CustomCard from '../../components/card/card.component';
import FLoatingButton from '../../components/floating-button/floating-button.component';

import './homepage.styles.scss';

const HomePage = () => {
    const [taskGroups, setTaskGroups] = useState(['Default Task']);

    const floatingClickHandler = () => {
        const newTask = 'New Task';
        setTaskGroups([...taskGroups, newTask]);
    };

    const removeFromTaskGroups = (id) => {
        const tmp = [...taskGroups];
        tmp.splice(id, 1);
        setTaskGroups([...tmp]);
    };

    return (
        <div className='home-page'>
            {taskGroups.map((task, index) => (
                <CustomCard
                    key={index}
                    id={index}
                    deleteCardGroup={removeFromTaskGroups}
                />
            ))}
            <FLoatingButton onClickHandler={floatingClickHandler} />
        </div>
    );
};

export default HomePage;
