/*import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import {Message} from './components/Message'
import {ClickHandler} from './components/ClickHandler'
import {ParentComponent} from './components/ParentComponent'
import {UserGreeting} from './components/UserGreeting'
import { NameList } from './components/NameList';
import { StyleSheet } from './components/Stylesheet'
import { Inline } from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css';
=
import {Form} from './components/Form'
import {PostList} from './components/PostList'
import {PostForm} from './components/PostForm'*/
import NAMES from './components/data.json'
import { useState } from 'react';

function App() {
  const[querry, setQuerry]=useState('')
  const changeHandler=(event)=>{
    
    
  setQuerry(event.target.value)
}
const filteredNamed =NAMES.filter(item=>{
  return item.first_name.includes(querry)|| item.last_name.includes(querry)
})

  return (
  
    <div className="App">
      <input type='text' value={querry} onChange={changeHandler}></input>
    {/* <Greet name='Utkarsh-' trade='Computer Science'></Greet>
     <Greet name='Navneet-' trade='Mechanical'></Greet>
     <Greet name='Aarush-' trade='Computer Science'></Greet>
     <Greet name='Prashil-' trade='Computer Science'>
      <button>Action</button>
     </Greet>
     <Greet name='Prateek-' trade='Mechanical'>
      <p>This is the children props.</p>
     </Greet>

     <Message></Message>

     
     <ClickHandler></ClickHandler>

     <ParentComponent></ParentComponent>
      

      <UserGreeting></UserGreeting>
      

      <NameList></NameList>
      

      <StyleSheet></StyleSheet>
      
      
     
      <Inline></Inline>
    <h1 className='error'>error</h1>
    <h1 className={styles.success}>success</h1>
    <Form></Form>
    
    
    <PostList></PostList> 
    <PostForm></PostForm>
     */}
    {
    filteredNamed.map((item)=>(
      <p key={item.id}>{item.first_name}{item.last_name}</p>

    ))}
    </div>
  )
}

export default App;
