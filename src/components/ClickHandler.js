export const ClickHandler = () =>{

        const clickHandler = (event,count=1) => {
            console.log('Button clicked',event,count)
        }

    
    return <div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(event)=>clickHandler(event,5)}>Click5</button>
    </div>
}