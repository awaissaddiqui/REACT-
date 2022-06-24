import { useState, useEffect } from "react";
import axios from 'axios'
const Table = () => {
    const [users, setUsers] = useState([]);
    useEffect ( () => {
        const loadData =async()=>{
            const {data}= await axios.get("https://api.github.com/users");
            setUsers(data)
        }
        loadData();

    },[users])
    return (
        <div>
            {users.map(user=> {
                return <li key={user.id} style={{backgroundColor:"gray"}}>{user.login}- <br/><img  src={user.avatar_url}/></li>
            })}

        </div>
    )
}
export default Table