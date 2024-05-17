import React from "react";
import { useState } from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

function TodoForm(props){

    const [text, setText] = useState("");
    const dispatch = useDispatch()
    function handleChange(event){
        let t = event.target.value;
        setText(t)

      
    }
    function addItemEvent(event){
        event.preventDefault();
        if(text){
        dispatch(addItem(text))
        setText("")
        }
        props.onHideModal()

    }  

    return(  <form>
        <input type="text" onChange={handleChange} value={text}></input>
        <button onClick={addItemEvent}>Add</button>
    </form>)

}

export default TodoForm