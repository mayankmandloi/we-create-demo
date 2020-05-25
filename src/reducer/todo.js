export const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NEW_TODO':
            return[
                ...state,
                action.todo
            ]
        case 'EDIT_TODO':
            const todo = state[action.index]
            return [
                ...state,
                {
                    ...todo,
                    ...action.todo
                }
            ]
        default: 
        return state;
    }
    }