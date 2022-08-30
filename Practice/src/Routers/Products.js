import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Products =()=>{
    const [searchParams]=useSearchParams();
    const data=Object.fromEntries([...searchParams]);
//   console.log(data) 
   return(
        <div>
            This is a Heading 
            You Enter this {data.sort}

        </div>
    )
}
export default Products 