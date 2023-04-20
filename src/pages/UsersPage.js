import React from "react";
import {User} from "../components/User";



class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userDetails: null,
        }
    }


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then(data => this.setState({ users: data }));
    }
  
    getOneUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
         .then((data) => this.setState({ userDetails: data }));
    }

    render() {
        const {users, userDetails} = this.state

        return (
            <>            
                <h1>Users List</h1>

                <ul>
                    {users.map((user) => (
                        <User
                        userInfo={user}
                        key={user.id}
                        getOneUser={this.getOneUser}
                        userDetails={userDetails && userDetails.id === user.id ? userDetails : null
                        }
                        />
                    ))}
                </ul>
             </>
        )
    }
}

export default UsersPage;