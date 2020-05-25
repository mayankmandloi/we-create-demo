import React from 'react';
export const Form = (props) => {
    const list=JSON.stringify(props.todoList)
    const addNewTodo = () => props.addTodo({name:'Mayank'})
return (
    <>
        <h1 onClick={addNewTodo}>Add</h1>
        <p>{list}</p>
    </>
);
}