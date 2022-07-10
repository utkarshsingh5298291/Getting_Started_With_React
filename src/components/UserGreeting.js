 //conditionally rendered
 export const UserGreeting =()=>{
    
    const isLoggedIn=true

    return <div>Welcome {isLoggedIn ? 'Utkarsh' :'Guest' }</div>
    // return <div>Welcome {isLoggedIn && 'utkarsh' }</div>
 }