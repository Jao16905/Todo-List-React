import React, {  useEffect, useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import Modal from "./components/Modal"
import TodoForm from "./components/TodoForm";
import "./Todo.css"

import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux'

import listReducer from "./reducer/listReducer";


const SAVED_ITEMS = "savedItems"

function persistState(state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState() {

    const actualState = localStorage.getItem(SAVED_ITEMS);

    if(actualState){
        return JSON.parse(actualState);
    }
    else{
        return []
    }
}

const store = configureStore({
    reducer: listReducer,
    preloadedState: loadState()
})

store.subscribe(()=>{
    persistState(store.getState())
})

function Todo(){

    const [showModal, setshowModal] = useState(false)

    function onHideModal(){

        setshowModal(false)
    }


    return(<div className="container">

        <Provider store={store}>
       <header className="header"> <h1>Todo</h1> <button onClick={() =>{ setshowModal(true)}} className="addButton">+</button></header>   

        <List ></List>
        <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal} ></TodoForm></Modal>
        </Provider>
    </div>)

}




export default Todo