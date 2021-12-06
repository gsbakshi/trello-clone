class Task {
    constructor(id= Date.now().toString(), content = '') {
        this.id = id;
        this.content = content;
    }
}

export default Task;