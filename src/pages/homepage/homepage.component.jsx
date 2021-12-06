import { useState } from 'react';

import CustomCard from '../../components/card/card.component';
import FloatingButton from '../../components/floating-button/floating-button.component';

import TaskGroup from '../../utilities/task-group';

import './homepage.styles.scss';

const HomePage = () => {
    const [taskGroups, setTaskGroups] = useState([new TaskGroup()]);

    const floatingClickHandler = () => {
        const newTask = new TaskGroup();
        setTaskGroups([...taskGroups, newTask]);
    };

    const removeFromTaskGroups = (id) => {
        const tmp = taskGroups.filter((taskGroup) => taskGroup.id !== id);
        setTaskGroups([...tmp]);
    };

    const updateTitle = (taskGroupId, title) => {
        const tmp = [...taskGroups];
        tmp.filter((taskGroup) => taskGroup.id === taskGroupId)[0].title =
            title;
        setTaskGroups([...tmp]);
    };

    const updateTasks = (taskGroupId, tasks) => {
        const tmp = [...taskGroups];
        tmp.filter((taskGroup) => taskGroup.id === taskGroupId)[0].tasks =
            tasks;
        setTaskGroups([...tmp]);
    };

    return (
        <div className='home-page'>
            {taskGroups.map((taskGroup) => (
                <CustomCard
                    key={taskGroup.id}
                    updateTitle={updateTitle}
                    updateTasks={updateTasks}
                    deleteCardGroup={removeFromTaskGroups}
                    taskGroup={taskGroup}
                />
            ))}
            <FloatingButton
                onClickHandler={floatingClickHandler}
                iconType='fa-plus'
            />
        </div>
    );
};

export default HomePage;
