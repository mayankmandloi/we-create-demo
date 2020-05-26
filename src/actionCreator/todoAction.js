export const addTodo = (todo) => {
    return {
        todo,
        type: 'ADD_NEW_TODO'
    }
};

export const editTodo = (index, todo) => {
    return {
        index,
        todo,
        type: 'EDIT_TODO'
    }
}