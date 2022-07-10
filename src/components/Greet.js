//JSX--syntax extension to javascript
export const Greet=(props)=>
{
    return ( 
    <div>    
         <h1>Hello!  {props.name} studied {props.trade}</h1>
                    {props.children}

     </div>

           )
}


//export default Greet         