export const addTodo = (todo) => {
    console.log(todo);
    return {
        type: 'ADD_NEW_TODO',
        todo
    }
}