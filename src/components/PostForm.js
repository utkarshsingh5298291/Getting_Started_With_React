import { useState } from 'react'

export const PostForm=()=>{

    const [userID, setUserID]=useState('')
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
   
    const submitHandler=(event)=>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return <form onSubmit={submitHandler}>
        <div>

        <input type='text' placeholder="User ID" value={userID} onChange={(event)=> setUserID(event.target.value)}></input>
       
        <input type='text' placeholder="Title" value={title} onChange={(event)=> setTitle(event.target.value)}></input>
        
        <input type='text' placeholder="Body" value={body} onChange={(event)=>setBody(event.target.value)}></input>
        
        <button type='submit'>submit</button>
        </div>
    </form>
    
}