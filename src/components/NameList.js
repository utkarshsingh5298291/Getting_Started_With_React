export const NameList =()=>{

    const names=['utkarsh','navneet','aarush','pandey','prashil']

    return <div> 
        {
             names.map((name)=>{
                return <h2 key={name}>{name}</h2>
             })
        }
     </div>
    
}