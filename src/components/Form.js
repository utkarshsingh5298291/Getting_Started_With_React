import { useState } from 'react'


export const Form=()=>
{
    const [username, setUsername]= useState('')
    const [description, setDescription]= useState('')
    const [country, setCountry]= useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`form data is ${username} ${description} ${country}`)

   
    }
    
        return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>UserName : </label>
                <input type='text' value={username} onChange={(event)=> setUsername(event.target.value)}></input>
                
               <label>Description: </label>
                <input type='text' value={description} onChange={(event)=>setDescription(event.target.value)}></input>
                
                
                <label>Countries: </label>
                <select name="Countries" value={country} onChange={(event)=>setCountry(event.target.value)}>
                            <option value="india">india</option>
                            <option value="usa">usa</option>
                            <option value="israel">israel</option>
                            <option value="germany">germany</option>
                </select>
               
                <button type='submit'>Submit</button>
                
            
            </div>
        </form>
        )
}