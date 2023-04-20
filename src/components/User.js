import React from "react"

export function User ({userInfo, getOneUser, userDetails}) {
    return (
        <div>
           <li>
            {userInfo.name} <s/>
            <button onClick={() => getOneUser(userInfo.id)}>more info</button>    
            </li> 
        
            {userDetails && (
                <ul>
                    <li>Name: {userDetails.name}</li>
                    <li>Username: {userDetails.username}</li>
                    <li>Email: {userDetails.email}</li>
                    <li>Website: {userDetails.website}</li>
                </ul>
            )}
            <hr/>
        </div>
    )
}