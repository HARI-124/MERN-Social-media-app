import React from 'react'
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts.js"
import { useEffect,useState } from 'react';
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Posts from './components/Posts/Posts';
import Create from './components/Create/Create';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect( ()=>{
      dispatch(getPosts()); // it will return the actions and the dispatch function will dispatch the actions to the reducers.
  },[dispatch])
  
  return (
    <div>
    <Navbar />
    
    <div>
    <Create></Create>
    </div>
   
  
    
    
  <Posts></Posts>
    </div>
  )
}

export default App