class TaskGroup {
    constructor(
        id = Date.now().toString(),
        title = 'Card',
        description = '',
        tasks = []
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }
}

export default TaskGroup;