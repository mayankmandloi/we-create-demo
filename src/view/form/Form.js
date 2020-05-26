import React from 'react';
import "./Form.css"
export const Form = (props) => {
    let currentTodo = {};
    const addNewTodo = (event) => {
        props.addTodo({todo: currentTodo})
        event.preventDefault();
    }
    const saveTodo = (event) => {
        currentTodo.saved=true;
        props.editTodo(event.target.id, currentTodo);
        event.preventDefault();
    }
    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        props.editTodo(event.target.dataset.index, {[key]:value});
        currentTodo[event.target.name]= event.target.value;
      };
    const FormEle = (entry, index) => <form key={index}>
        <input onChange={handleChange} type='text' name='firstName' value={entry.firstName} data-index={index}/> 
        <input onChange={handleChange} type='text' name='lastName'value={entry.lastName} data-index={index}/> 
        <input onChange={handleChange} type='email' name='email'value={entry.email} data-index={index}/>
        <input onChange={handleChange} type='radio' name='gender' value='male' data-index={index} checked={entry.gender==='male'}/> Male
        <input onChange={handleChange} type='radio' name='gender' value='female' data-index={index} checked={entry.gender==='female'}/> Female
        <input onChange={handleChange} type='date' name='dob'value={entry.dob} data-index={index}/>
        <button onClick={saveTodo} id={index}>Save</button>
    </form>;

    const savedEle = (entry) => {
    return (
    <p>{`Name:- ${entry.firstName || ''} ${entry.lastName|| ''}, email:- ${entry.email || ''}, gender:- ${entry.gender || ''} dob:- ${entry.dob || ''}`}</p>);
    }

return (<>
    <button className="addButton"><h3 onClick={addNewTodo}>Add New Todo</h3></button>
    <div className='formData'>
    {[...props.todoList].map((item, index)=>item.saved ? savedEle(item) : FormEle(item, index))}
    </div>
    </>
);
}