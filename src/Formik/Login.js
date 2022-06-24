import React from 'react'
const Login=()=>{
    
   
    return (
        <div>
            <h1>Use Search Params</h1>
            <form>
                <label htmlFor="password">Password</label><input type="password" name="password" id="password" value=""/>
                <label htmlFor="username">Username</label><input type="username" name="username" id="username" value=""/>
            </form>
        </div>
    )
}
export default Login