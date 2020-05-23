const React = require('react');

class LoginUser extends React.Component {
    render(){
        return(
            <body>
                <h1>User Login</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>
                <a href="/"><button>Cancel</button></a>
            </body>
        )
    }
}



module.exports = LoginUser;