const defaultState = [
    {
    dob:"",
    email:"",
    firstName: "",
    gender: "",
    lastName: ""
    }
]
export const todos = (state=defaultState, action) => {
    switch(action.type) {
        case 'ADD_NEW_TODO':
            return[
                ...state,
                action.todo
            ]
        case 'EDIT_TODO':
            const todo = state[action.index];
            const newState = [...state];
            newState.splice(action.index, 1, {...todo, ...action.todo});
            return newState;

        default: 
        return state;
    }
    }